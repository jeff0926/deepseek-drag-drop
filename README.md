<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>README.md - DeepSeek Drag-and-Drop App</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
        }
        h1, h2, h3, h4 {
            margin-top: 1em;
        }
        pre {
            background: #f4f4f4;
            padding: 10px;
            border-radius: 5px;
        }
        code {
            background: #f4f4f4;
            padding: 2px 5px;
            border-radius: 3px;
        }
    </style>
</head>
<body>

<h1>DeepSeek Drag-and-Drop App</h1>

<p>A Flask-based web application that allows users to drag and drop files, extract metadata, and send them to the DeepSeek API for analysis. The app provides a user-friendly interface for interacting with the DeepSeek API and displaying responses.</p>

<hr>

<h2>Project Structure</h2>

<pre>
deepseek-drag-drop/
├── .venv/                 # Virtual environment folder
├── app/                   # Flask backend
│   ├── __init__.py        # Flask app initialization
│   ├── routes.py          # Flask routes (API endpoints)
│   ├── utils/             # Utility functions (if any)
│   └── __pycache__/       # Python compiled files
├── frontend/              # Frontend files (HTML, CSS, JS)
│   ├── index.html         # Main HTML file
│   ├── styles.css         # CSS file for styling
│   ├── scripts.js         # JavaScript file for interactivity
│   └── script.js          # (Optional) Additional JS file
├── tests/                 # Test files (if any)
├── .env                   # Environment variables (API key, etc.)
├── .gitignore             # Files/folders to ignore in Git
├── README.md              # Project documentation
├── requirements.txt       # Python dependencies
└── run.py                 # Entry point to run the Flask app
</pre>

<hr>

<h2>Features</h2>

<ul>
    <li>
        <strong>Drag-and-Drop Interface:</strong>
        <ul>
            <li>Users can drag and drop up to 10 files at a time.</li>
            <li>File metadata (name, size, type, etc.) is extracted and displayed.</li>
        </ul>
    </li>
    <li>
        <strong>Metadata Extraction:</strong>
        <ul>
            <li>Extracts metadata such as:</li>
            <ul>
                <li>File name</li>
                <li>File size (formatted in KB/MB/GB)</li>
                <li>File type (MIME type)</li>
                <li>Last modified date</li>
                <li>Line count, word count, and character count (for text files)</li>
            </ul>
        </ul>
    </li>
    <li>
        <strong>DeepSeek API Integration:</strong>
        <ul>
            <li>Users can input a <strong>system prompt</strong> and a <strong>user prompt</strong>.</li>
            <li>Selected files and prompts are sent to the DeepSeek API for analysis.</li>
            <li>The API response is displayed in the "LLM Response" section.</li>
        </ul>
    </li>
</ul>

<hr>

<h2>Setup Instructions</h2>

<h3>1. Clone the Repository</h3>
<p>Clone the repository to your local machine:</p>
<pre><code>git clone &lt;repository-url&gt;
cd deepseek-drag-drop
</code></pre>

<h3>2. Set Up a Virtual Environment</h3>
<p>Create and activate a virtual environment:</p>
<pre><code>python -m venv .venv
source .venv/bin/activate  # On Windows: .venv\Scripts\activate
</code></pre>

<h3>3. Install Dependencies</h3>
<p>Install the required Python packages:</p>
<pre><code>pip install -r requirements.txt
</code></pre>

<h3>4. Set Up Environment Variables</h3>
<p>Create a <code>.env</code> file in the root directory and add your DeepSeek API key:</p>
<pre><code>DEEPSEEK_API_KEY=your_api_key_here
FLASK_ENV=development
</code></pre>

<h3>5. Run the Flask App</h3>
<p>Start the Flask development server:</p>
<pre><code>python run.py
</code></pre>

<h3>6. Access the App</h3>
<p>Open your browser and navigate to:</p>
<pre><code>http://127.0.0.1:5000/
</code></pre>

<hr>

<h2>File Descriptions</h2>

<h3>Backend (app/ Folder)</h3>

<p><strong>__init__.py</strong>:</p>
<p>Initializes the Flask app and configures it to serve static files and templates from the frontend/ folder.</p>

<p><strong>routes.py</strong>:</p>
<p>Defines the API endpoints:</p>
<ul>
    <li><code>/</code>: Serves the <code>index.html</code> file.</li>
    <li><code>/analyze</code>: Accepts file uploads and prompts, sends them to the DeepSeek API, and returns the response.</li>
</ul>

<h3>Frontend (frontend/ Folder)</h3>

<p><strong>index.html</strong>:</p>
<p>The main HTML file for the drag-and-drop interface. Includes input fields for system and user prompts, a "Send to LLM" button, and areas to display file metadata and API responses.</p>

<p><strong>styles.css</strong>:</p>
<p>Styles for the HTML page, including the dropzone, status area, and results section.</p>

<p><strong>scripts.js</strong>:</p>
<p>Handles drag-and-drop functionality, file metadata extraction, and API calls.</p>

<h3>Other Files</h3>

<p><strong>.env</strong>:</p>
<p>Stores environment variables like the DeepSeek API key.</p>

<p><strong>requirements.txt</strong>:</p>
<p>Lists Python dependencies required for the project.</p>

<p><strong>run.py</strong>:</p>
<p>The entry point to run the Flask app.</p>

<hr>

<h2>Usage</h2>

<h3>Drag and Drop Files</h3>
<p>Drag up to 10 files into the dropzone. File metadata will be displayed.</p>

<h3>Enter Prompts</h3>
<p>Enter a system prompt (e.g., "You are a helpful assistant") and a user prompt (e.g., "Summarize this file").</p>

<h3>Send to LLM</h3>
<p>Click the "Send to LLM" button to send the selected files and prompts to the DeepSeek API.</p>

<h3>View Response</h3>
<p>The API response will be displayed in the "LLM Response" section.</p>

<hr>

<h2>Dependencies</h2>

<h3>Python Packages</h3>
<ul>
    <li>Flask</li>
    <li>python-dotenv</li>
    <li>openai</li>
    <li>flask-cors</li>
</ul>

<h3>Frontend</h3>
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ul>

<hr>

<h2>Contributing</h2>
<p>Contributions are welcome! If you'd like to contribute, please follow these steps:</p>
<ol>
    <li>Fork the repository.</li>
    <li>Create a new branch for your feature or bugfix.</li>
    <li>Submit a pull request with a detailed description of your changes.</li>
</ol>

<hr>

<h2>License</h2>
<p>This project is licensed under the MIT License. See the LICENSE file for details.</p>

<hr>

<h2>Contact</h2>
<p>For questions or feedback, please contact:</p>
<p>Your Name: <a href="mailto:your.email@example.com">your.email@example.com</a></p>
<p>Project Repository: <a href="<repository-url>">&lt;repository-url&gt;</a></p>

</body>
</html>

