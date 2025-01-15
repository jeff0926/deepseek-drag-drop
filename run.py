import sys
sys.path.append("C:/sandbox/Python/deepseek-drag-drop")
from app import app

print(app.url_map)

if __name__ == "__main__":
    app.run(debug=True)
