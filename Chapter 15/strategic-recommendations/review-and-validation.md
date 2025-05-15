<!-- Copilot Prompt: "Highlight why reviewing and validating AI-generated code is essential before production deployment." -->

## Review AI-Generated Code

Copilot-generated code must be reviewed for performance, maintainability, and security before integration.

Best Practices:
- Conduct manual reviews using code review platforms.
- Use static analysis tools to detect security vulnerabilities.
- Ensure compliance with industry-specific standards.
- Add unit tests to validate functionality.

Example:

Vulnerable query:

query = f"SELECT * FROM users WHERE username = '{user_input}'"

Secure version using parameterization:

query = "SELECT * FROM users WHERE username = %s"
cursor.execute(query, (user_input,))
