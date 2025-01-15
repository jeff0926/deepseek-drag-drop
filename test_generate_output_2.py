import requests


# URL of the Flask endpoint
# url = "http://127.0.0.1:5000/generate-output"
# url = "http://127.0.0.1:5000/generate-system-prompt"
url = "http://127.0.0.1:5000/generate-system-prompt"
payload = {"role": "Solution Architect"}
headers = {"Content-Type": "application/json"}

response = requests.post(url, json=payload, headers=headers)

try:
    print("Status Code:", response.status_code)
    print("Response JSON:", response.json())
except requests.exceptions.JSONDecodeError:
    print("Status Code:", response.status_code)
    print("Response Text:", response.text)

