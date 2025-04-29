import re

def is_valid_email(email):
    """
    Validates if a string is a properly formatted email address.
    
    This function uses a regular expression to check if the provided string
    matches the pattern of a valid email address. A valid email consists of:
    - A username part containing letters, numbers, dots, underscores, or hyphens
    - An @ symbol
    - A domain name containing letters, numbers, dots, or hyphens
    - A top-level domain (TLD) of at least 2 characters
    
    Args:
        email (str): The email address to validate
        
    Returns:
        bool: True if the email is valid, False otherwise
    """
    pattern = r'^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    return bool(re.match(pattern, email))

# Test the function with some email addresses
sample_emails = [
    "user@example.com",        # Valid email
    "user.name@domain.co.uk",  # Valid email with subdomain
    "user123@website-name.org",# Valid email with hyphen in domain
    "invalid@email",           # Invalid - missing top-level domain
    "no_at_symbol.com",        # Invalid - missing @ symbol
    "user@.com",               # Invalid - empty domain name
    "spaces are@invalid.com"   # Invalid - contains spaces
]

# Check each email and print the result
for email in sample_emails:
    status = "Valid" if is_valid_email(email) else "Invalid"
    print(f"{email}: {status}")