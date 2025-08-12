# Prompt: List common risks when using Copilot in security-sensitive code

## Security Risks
- **Accidental inclusion of vulnerable patterns** (e.g., string-based SQL)
- **Copying insecure legacy examples** (e.g., MD5 hashing)
- **Lack of runtime validation suggestions**
- **Insufficient escape mechanisms for user input**

## Best Practices
- Always apply static analysis after generation
- Use linters, validators, and secret scanners
- Explicitly prompt Copilot for secure patterns
