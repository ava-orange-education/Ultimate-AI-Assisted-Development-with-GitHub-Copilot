# Prompt Used: Write a Flask API with a single route `/status` that returns a JSON response indicating the API is running

from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/status', methods=['GET'])
def status():
    return jsonify({"status": "API is running"}), 200

# Example usage: 
# Run the app using `flask run` and access http://localhost:5000/status
if __name__ == "__main__":
    app.run(debug=True)
