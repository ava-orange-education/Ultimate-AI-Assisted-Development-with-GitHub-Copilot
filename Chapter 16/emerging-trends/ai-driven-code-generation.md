# AI-Driven Code Generation

<!-- Copilot Prompt: "Write a REST API in Python using Flask that supports user authentication with JWT." -->

AI is capable of generating complete functional modules such as APIs, UIs, or data pipelines. This example demonstrates a JWT-secured REST API using Flask.

```python
from flask import Flask, request, jsonify
import jwt
import datetime

app = Flask(__name__)
SECRET_KEY = "supersecret"

@app.route("/login", methods=["POST"])
def login():
    username = request.json.get("username")
    if username:
        token = jwt.encode({"user": username, "exp": datetime.datetime.utcnow() + datetime.timedelta(hours=1)}, SECRET_KEY, algorithm="HS256")
        return jsonify({"token": token})
    return jsonify({"error": "Missing username"}), 400

if __name__ == "__main__":
    app.run(debug=True)
```

This demonstrates how GitHub Copilot accelerates bootstrapping development tasks.