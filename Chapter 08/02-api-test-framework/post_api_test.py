# GitHub Copilot Prompt:
# Design a reusable Python function for POST API testing.
# Support dynamic payloads, error handling, and status code validation.
# Integrate basic logging for debugging.

import requests
import logging

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

def post_api_test(url, payload, headers=None, expected_status_code=200):
    """
    Send a POST request and validate the response status code.

    :param url: API endpoint
    :param payload: JSON body as dict
    :param headers: Optional headers
    :param expected_status_code: Status code to expect
    :return: Parsed JSON response or raises error
    """
    try:
        logging.info(f"POST {url} | Payload: {payload} | Headers: {headers}")
        response = requests.post(url, json=payload, headers=headers)

        logging.info(f"Status Code: {response.status_code}")
        if response.status_code != expected_status_code:
            logging.error(f"Expected {expected_status_code}, got {response.status_code}")
            response.raise_for_status()

        try:
            json_response = response.json()
            logging.info(f"Response JSON: {json_response}")
            return json_response
        except ValueError as e:
            logging.error(f"JSON parse error: {e}")
            raise

    except requests.RequestException as e:
        logging.error(f"Request error: {e}")
        raise

# Example usage
if __name__ == "__main__":
    test_url = "https://jsonplaceholder.typicode.com/posts"
    test_payload = {
        "title": "foo",
        "body": "bar",
        "userId": 1
    }
    test_headers = {
        "Content-Type": "application/json"
    }

    try:
        response = post_api_test(test_url, test_payload, test_headers, expected_status_code=201)
        print("Test passed. Response:", response)
    except Exception as e:
        print("Test failed:", e)
