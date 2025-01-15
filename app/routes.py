from flask import request, jsonify, render_template
from app import app
from openai import OpenAI
import os
import json
import PyPDF2
from io import BytesIO
import base64
from app.clean import clean_text  # Import the cleaning module
from config.config_loader import ConfigLoader


# Load configurations
role_definitions = ConfigLoader.load_config("role_definition.json")
file_types = ConfigLoader.load_config("file_types_accepted.json")


@app.route("/")
def home():
    return render_template("index.html")


# Endpoint to fetch all roles
@app.route("/roles", methods=["GET"])
def get_roles():
    # Return roles from the loaded configuration
    return jsonify(role_definitions), 200


@app.route("/generate-system-prompt", methods=["POST"])
def generate_system_prompt():
    data = request.get_json()
    role_name = data.get("role")
    role_definitions = load_role_definitions()

    # Find the selected role
    selected_role = next(
        (role for role in role_definitions["roles"] if role["name"] == role_name), None
    )
    if not selected_role:
        return jsonify({"error": f"Role '{role_name}' not found."}), 404

    return jsonify({"system_prompt": selected_role["system_prompt"]})


# Endpoint to generate outputs for a selected role
@app.route("/generate-output", methods=["POST"])
def generate_output():
    data = request.get_json()
    role_name = data.get("role")
    role_definitions = load_role_definitions()

    if "error" in role_definitions:
        return jsonify(role_definitions), 500

    # Find the selected role
    selected_role = next(
        (role for role in role_definitions["roles"] if role["name"] == role_name), None
    )
    if not selected_role:
        return jsonify({"error": f"Role '{role_name}' not found."}), 404

    # Generate outputs
    outputs = []
    for output in selected_role["outputs"]:
        outputs.append(
            {
                "type": output["type"],
                "description": output["description"],
                "template": output["template"],
            }
        )

    return jsonify({"role": selected_role["name"], "outputs": outputs}), 200


# Hardcoded API Key for POC
api_key = "sk-48aad28f8ec54da1ba5a0f8b2bbd1f22"
client = OpenAI(api_key=api_key, base_url="https://api.deepseek.com")


@app.route("/analyze", methods=["POST"])
def analyze():
    try:
        # Parse JSON payload from the frontend
        payload = request.get_json()
        if not payload:
            return jsonify({"error": "Invalid JSON payload"}), 400

        system_prompt = payload.get("system_prompt")
        user_prompt = payload.get("user_prompt")
        files = payload.get("files", [])
        cleaning_level = payload.get(
            "cleaning_level", "light"
        )  # Default to light cleaning

        if not system_prompt or not user_prompt or not files:
            return jsonify({"error": "Prompts and files are required"}), 400

        # Process files and clean content
        cleaned_files = []
        total_metrics = {"characters_saved": 0, "words_saved": 0, "tokens_saved": 0}

        for file in files:
            file_name = file.get("name", "")
            file_format = file.get("format", "")
            file_content = file.get("content", "")

            # Extract text from PDF files
            if file_format == "application/pdf":
                file_content = extract_text_from_pdf(file_content)
            # Handle other file formats (e.g., plain text)
            else:
                file_content = file_content  # Assume content is already text

            # Clean the file content based on the selected cleaning level
            cleaned_content, metrics = clean_text(file_content, level=cleaning_level)
            cleaned_files.append(
                {
                    "name": file_name,
                    "content": cleaned_content,
                }
            )
            # Accumulate metrics
            total_metrics["characters_saved"] += metrics["characters_saved"]
            total_metrics["words_saved"] += metrics["words_saved"]
            total_metrics["tokens_saved"] += metrics["tokens_saved"]

        # Construct payload for DeepSeek API
        combined_prompt = f"{system_prompt}\n\n{user_prompt}\n\nFiles:\n"
        for file in cleaned_files:
            combined_prompt += f"File: {file['name']}\n{file['content']}\n\n"

        # Call DeepSeek API
        response = client.chat.completions.create(
            model="deepseek-chat",
            messages=[{"role": "user", "content": combined_prompt}],
            stream=False,
        )

        # Prepare response for the frontend
        llm_response = response.choices[0].message.content
        return jsonify(
            {
                "response": llm_response,
                "cleaning_metrics": total_metrics,
                "payload": {
                    "system_prompt": system_prompt,
                    "user_prompt": user_prompt,
                    "files": cleaned_files,
                },
            }
        )

    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route("/clean-files", methods=["POST"])
def clean_files():
    """
    Endpoint to clean files with 'ml_clean: true'.
    """
    data = request.get_json()
    files = data.get("files", [])

    cleaned_files = []
    total_metrics = {"characters_saved": 0, "words_saved": 0, "tokens_saved": 0}

    for file in files:
        # Check if the file requires cleaning
        file_type = next(
            (
                ft
                for ft in file_types["extensions"]
                if ft["extension"] == file["extension"]
            ),
            None,
        )
        if file_type and file_type.get("ml_clean", False):
            content = file.get("content", "")
            cleaning_level = file.get(
                "cleaning_level", "light"
            )  # Default to light cleaning
            cleaned_content, metrics = clean_text(content, level=cleaning_level)

            # Append cleaned file
            cleaned_files.append(
                {
                    "name": file["name"],
                    "content": cleaned_content,
                    "original_content": content,  # Optional for debugging
                    "cleaning_metrics": metrics,
                }
            )

            # Accumulate metrics
            for key in total_metrics:
                total_metrics[key] += metrics[key]

    return (
        jsonify({"cleaned_files": cleaned_files, "total_metrics": total_metrics}),
        200,
    )


# Helper function to extract text from PDF files
def extract_text_from_pdf(file_content):
    try:
        pdf_reader = PyPDF2.PdfReader(BytesIO(base64.b64decode(file_content)))
        text = ""
        for page in pdf_reader.pages:
            text += page.extract_text()
        return text
    except Exception as e:
        return f"Error extracting text from PDF: {str(e)}"


# Extract text from image files (placeholder for OCR)
def extract_text_from_image(file_content):
    return "Image text extraction not implemented."
