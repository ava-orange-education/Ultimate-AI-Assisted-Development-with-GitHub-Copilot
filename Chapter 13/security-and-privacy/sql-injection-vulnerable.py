# Prompt: Example of SQL injection vulnerable code
def get_user(email):
    query = f"SELECT * FROM users WHERE email = '{email}'"
    cursor.execute(query)
    return cursor.fetchone()
