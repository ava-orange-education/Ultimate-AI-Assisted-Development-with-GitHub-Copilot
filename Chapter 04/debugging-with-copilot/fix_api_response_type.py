# Prompt Used: Explain why a for-loop over API response is failing and suggest a fix

def process_api_response(response_data):
    """Processes API response assuming it contains a list under 'results' key."""
    try:
        results = response_data.get('results', [])
        for item in results:
            print(item)
    except AttributeError:
        print("Invalid response structure. Expected a dictionary.")

# Example usage:
if __name__ == "__main__":
    # Correct structure
    mock_response = {
        'results': ['Item1', 'Item2', 'Item3']
    }
    process_api_response(mock_response)

    # Incorrect structure (string instead of dict)
    bad_response = "unexpected string"
    process_api_response(bad_response)
