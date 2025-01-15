from flask import Flask
from flask_cors import CORS
from dotenv import load_dotenv
import os
import sys

# Load environment variables from .env file
load_dotenv()

# Initialize the Flask app
app = Flask(
    __name__,
    static_folder="../frontend",  # Serve static files from frontend/
    template_folder="../frontend"  # Serve templates from frontend/
)
CORS(app)

# Import routes after the app is created to avoid circular imports
from app import routes

