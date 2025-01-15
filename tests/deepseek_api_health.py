# deepseek_api_health.py
# python deepseek_api_health.py

from openai import OpenAI

client = OpenAI(api_key="sk-48aad28f8ec54da1ba5a0f8b2bbd1f22", base_url="https://api.deepseek.com")

response = client.chat.completions.create(
    model="deepseek-chat",
    messages=[
        {"role": "system", "content": "You are a helpful assistant"},
        {"role": "user", "content": "Hello"},
    ],
    stream=False
)

print(response.choices[0].message.content)

'''
Run this is developer / console after server (run.py) is running
fetch('http://127.0.0.1:5000/analyze', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        prompt: "What is the capital of France?",
        fileName: "test.txt"
    })
})
.then(response => response.json())
.then(data => {
    document.getElementById("responseText").innerText = data.response;
})
.catch(error => console.error('Error:', error));
'''