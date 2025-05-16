# GitHub Copilot Prompt:
# You are developing a secure Python payment processing module for a fintech company.
# Implement input validation, log unauthorized attempts, and handle errors gracefully.
# Ensure the function is reusable for different payment methods.

import re
import logging
import requests

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

class PaymentProcessor:
    def __init__(self, api_key):
        if not self._is_valid_api_key(api_key):
            logging.error("Unauthorized attempt with invalid API key")
            raise ValueError("Invalid API key")
        self.api_key = api_key

    def _is_valid_api_key(self, api_key):
        return bool(re.match(r'^[a-zA-Z0-9]{32}$', api_key))

    def _is_valid_amount(self, amount):
        return isinstance(amount, (int, float)) and amount > 0

    def _is_valid_currency(self, currency):
        return bool(re.match(r'^[A-Z]{3}$', currency))

    def _is_valid_payment_method(self, payment_method):
        return payment_method in ['credit_card', 'debit_card', 'paypal']

    def process_payment(self, amount, currency, payment_method, payment_details):
        if not self._is_valid_amount(amount):
            raise ValueError("Invalid amount. Amount must be a positive number.")
        if not self._is_valid_currency(currency):
            raise ValueError("Invalid currency. Must be a 3-letter ISO code.")
        if not self._is_valid_payment_method(payment_method):
            raise ValueError(f"Unsupported method: {payment_method}")

        try:
            logging.info(f"Processing {amount} {currency} via {payment_method}")
            response = requests.post(
                "https://api.paymentgateway.com/process",
                json={
                    "api_key": self.api_key,
                    "amount": amount,
                    "currency": currency,
                    "payment_method": payment_method,
                    "payment_details": payment_details
                }
            )
            if response.status_code != 200:
                logging.error(f"Failed: {response.status_code}")
                response.raise_for_status()
            result = response.json()
            logging.info(f"Success: {result}")
            return result
        except requests.RequestException as e:
            logging.error(f"Error processing payment: {e}")
            raise RuntimeError(f"Payment error: {str(e)}")

# Example usage
if __name__ == "__main__":
    try:
        processor = PaymentProcessor("your_api_key_here_32chars")
        details = {"card_number": "4111111111111111", "expiry_date": "12/23", "cvv": "123"}
        res = processor.process_payment(100.0, "USD", "credit_card", details)
        print("Payment Response:", res)
    except Exception as e:
        print("Error:", e)
