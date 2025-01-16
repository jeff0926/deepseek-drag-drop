from flask import request, jsonify, render_template
from app import app
from openai import OpenAI
import os
import json
import PyPDF2
from io import BytesIO
import base64
from app.clean import clean_text
from config.config_loader import ConfigLoader
import logging

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Load configurations
try:
    role_definitions = ConfigLoader.load_config("role_definition.json")
    file_types = ConfigLoader.load_config("file_types_accepted.json")
    logger.info("Configurations loaded successfully")
except Exception as e:
    logger.error(f"Error loading configurations: {str(e)}")
    role_definitions = {"roles": []}
    file_types = {"extensions": []}

# Initialize OpenAI client with DeepSeek configuration
api_key = os.getenv("DEEPSEEK_API_KEY", "sk-48aad28f8ec54da1ba5a0f8b2bbd1f22")  # Default for POC
client = OpenAI(api_key=api_key, base_url="https://api.deepseek.com")

@app.route("/")
def home():
    """Serve the main application page."""
    return render_template("index.html")

@app.route("/roles", methods=["GET"])
def get_roles():
    """Return all available roles from the configuration."""
    logger.info("Request received: Fetch roles")
    try:
        # Ensure `system_prompt` is included in the response
        roles_with_prompt = [
            {
                "name": role["name"],
                "definition": role["definition"],
                "function": role["function"],
                "system_prompt": role["system_prompt"],
                "outputs": role["outputs"],
            }
            for role in role_definitions["roles"]
        ]
        logger.info(f"Roles found: {roles_with_prompt}")
        return jsonify({"roles": roles_with_prompt}), 200
    except Exception as e:
        logger.error(f"Error fetching roles: {str(e)}")
        return jsonify({"error": "Failed to fetch roles"}), 500


@app.route("/generate-system-prompt", methods=["POST"])
def generate_system_prompt():
    """Generate a system prompt for the selected role."""
    try:
        data = request.get_json()
        if not data:
            return jsonify({"error": "No data provided"}), 400

        role_name = data.get("role")
        if not role_name:
            return jsonify({"error": "Role name is required"}), 400

        # Find the selected role
        selected_role = next(
            (role for role in role_definitions["roles"] if role["name"] == role_name),
            None
        )

        if not selected_role:
            return jsonify({"error": f"Role '{role_name}' not found"}), 404

        return jsonify({
            "system_prompt": selected_role.get("system_prompt", ""),
            "role": selected_role
        }), 200

    except Exception as e:
        logger.error(f"Error generating system prompt: {str(e)}")
        return jsonify({"error": "Failed to generate system prompt"}), 500

@app.route("/generate-output", methods=["POST"])
def generate_output():
    """Generate outputs for a selected role."""
    try:
        data = request.get_json()
        if not data:
            return jsonify({"error": "No data provided"}), 400

        role_name = data.get("role")
        if not role_name:
            return jsonify({"error": "Role name is required"}), 400

        # Find the selected role
        selected_role = next(
            (role for role in role_definitions["roles"] if role["name"] == role_name),
            None
        )

        if not selected_role:
            return jsonify({"error": f"Role '{role_name}' not found"}), 404

        # Generate outputs
        outputs = [
            {
                "type": output["type"],
                "description": output["description"],
                "template": output["template"]
            }
            for output in selected_role.get("outputs", [])
        ]

        return jsonify({
            "role": selected_role["name"],
            "outputs": outputs
        }), 200

    except Exception as e:
        logger.error(f"Error generating outputs: {str(e)}")
        return jsonify({"error": "Failed to generate outputs"}), 500

@app.route("/analyze", methods=["POST"])
def analyze():
    """Process files and generate response using DeepSeek API."""
    try:
        # Parse JSON payload
        payload = request.get_json()
        if not payload:
            return jsonify({"error": "Invalid JSON payload"}), 400

        # Extract required fields
        system_prompt = payload.get("system_prompt")
        user_prompt = payload.get("user_prompt")
        files = payload.get("files", [])
        cleaning_level = payload.get("cleaning_level", "light")

        # Validate required fields
        if not system_prompt or not user_prompt or not files:
            return jsonify({"error": "System prompt, user prompt, and files are required"}), 400

        # Process and clean files
        cleaned_files = []
        total_metrics = {"characters_saved": 0, "words_saved": 0, "tokens_saved": 0}

        for file in files:
            try:
                file_name = file.get("name", "")
                file_format = file.get("format", "")
                file_content = file.get("content", "")

                # Process content based on file type
                if file_format == "application/pdf":
                    file_content = extract_text_from_pdf(file_content)
                elif file_format.startswith("image/"):
                    file_content = extract_text_from_image(file_content)

                # Clean the content
                cleaned_content, metrics = clean_text(file_content, level=cleaning_level)
                cleaned_files.append({
                    "name": file_name,
                    "content": cleaned_content,
                })

                # Accumulate metrics
                for key in total_metrics:
                    total_metrics[key] += metrics.get(key, 0)

            except Exception as e:
                logger.error(f"Error processing file {file_name}: {str(e)}")
                continue

        if not cleaned_files:
            return jsonify({"error": "No files were successfully processed"}), 400

        # Construct prompt for DeepSeek API
        combined_prompt = f"{system_prompt}\n\n{user_prompt}\n\nFiles:\n"
        for file in cleaned_files:
            combined_prompt += f"File: {file['name']}\n{file['content']}\n\n"

        # Call DeepSeek API
        response = client.chat.completions.create(
            model="deepseek-chat",
            messages=[{"role": "user", "content": combined_prompt}],
            stream=False
        )

        # Prepare response
        return jsonify({
            "response": response.choices[0].message.content,
            "cleaning_metrics": total_metrics,
            "payload": {
                "system_prompt": system_prompt,
                "user_prompt": user_prompt,
                "files": cleaned_files,
            }
        }), 200

    except Exception as e:
        logger.error(f"Error in analyze endpoint: {str(e)}")
        return jsonify({"error": str(e)}), 500

@app.route("/clean-files", methods=["POST"])
def clean_files():
    """Clean files with ml_clean flag enabled."""
    try:
        data = request.get_json()
        if not data:
            return jsonify({"error": "No data provided"}), 400

        files = data.get("files", [])
        if not files:
            return jsonify({"error": "No files provided"}), 400

        cleaned_files = []
        total_metrics = {"characters_saved": 0, "words_saved": 0, "tokens_saved": 0}

        for file in files:
            try:
                # Get file type configuration
                file_extension = file.get("extension")
                file_type = next(
                    (ft for ft in file_types["extensions"] if ft["extension"] == file_extension),
                    None
                )

                # Process file if it requires cleaning
                if file_type and file_type.get("ml_clean", False):
                    content = file.get("content", "")
                    cleaning_level = file.get("cleaning_level", "light")
                    
                    cleaned_content, metrics = clean_text(content, level=cleaning_level)
                    cleaned_files.append({
                        "name": file["name"],
                        "content": cleaned_content,
                        "original_content": content,
                        "cleaning_metrics": metrics
                    })

                    # Accumulate metrics
                    for key in total_metrics:
                        total_metrics[key] += metrics.get(key, 0)

            except Exception as e:
                logger.error(f"Error cleaning file {file.get('name')}: {str(e)}")
                continue

        return jsonify({
            "cleaned_files": cleaned_files,
            "total_metrics": total_metrics
        }), 200

    except Exception as e:
        logger.error(f"Error in clean_files endpoint: {str(e)}")
        return jsonify({"error": str(e)}), 500

def extract_text_from_pdf(file_content):
    """Extract text from PDF content."""
    try:
        pdf_reader = PyPDF2.PdfReader(BytesIO(base64.b64decode(file_content)))
        return " ".join(page.extract_text() for page in pdf_reader.pages)
    except Exception as e:
        logger.error(f"Error extracting PDF text: {str(e)}")
        raise Exception(f"Failed to extract text from PDF: {str(e)}")

def extract_text_from_image(file_content):
    """Placeholder for image text extraction."""
    logger.warning("Image text extraction not implemented")
    return "Image text extraction not implemented."

# Error handlers
@app.errorhandler(404)
def not_found_error(error):
    return jsonify({"error": "Resource not found"}), 404

@app.errorhandler(500)
def internal_error(error):
    logger.error(f"Internal server error: {str(error)}")
    return jsonify({"error": "Internal server error"}), 500