# test_generate_output.py
# python test_generate_output.py


import requests


# URL of the Flask endpoint
# url = "http://127.0.0.1:5000/generate-output"
# url = "http://127.0.0.1:5000/generate-system-prompt"
#url = "http://127.0.0.1:5000/generate-system-prompt"


# URL of the Flask endpoint
url = "http://127.0.0.1:5000/clean-files"

# Payload with a sample file for cleaning
payload = {
    "files": [
        {
            "name": "example.txt",
            "extension": ".txt",
            "content": "This is a sample content with HTML tags <b>bold</b> and stopwords.",
            "cleaning_level": "medium"  # Cleaning level: light, medium, or heavy
        }
    ]
}

# Headers
headers = {"Content-Type": "application/json"}

# Send POST request
response = requests.post(url, json=payload, headers=headers)

# Handle the response
try:
    print("Status Code:", response.status_code)
    print("Response JSON:", response.json())
except requests.exceptions.JSONDecodeError:
    print("Status Code:", response.status_code)
    print("Response Text:", response.text)




