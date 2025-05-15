# AI in Security Audits

<!-- Copilot Prompt: "Detect SQL injection vulnerability in the following Python function and secure it." -->

This section highlights how GitHub Copilot identifies and resolves vulnerabilities such as SQL injection.

### Vulnerable Code

```python
def get_user_data(user_id):
    query = f"SELECT * FROM users WHERE id = {user_id}"
    return execute_query(query)
```

### AI-Suggested Secure Fix

```python
def get_user_data(user_id):
    query = "SELECT * FROM users WHERE id = %s"
    return execute_query(query, (user_id,))
```

The AI recommends using parameterized queries to prevent SQL injection attacks.