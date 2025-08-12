# Prompt: Secure version of the SQL query using parameterization
def get_user(email):
    query = "SELECT * FROM users WHERE email = ?"
    cursor.execute(query, (email,))
    return cursor.fetchone()
