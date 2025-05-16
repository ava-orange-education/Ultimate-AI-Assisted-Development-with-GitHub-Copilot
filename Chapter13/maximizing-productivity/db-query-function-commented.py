# Prompt: Add inline comments for database query function
def get_orders_by_user(user_id):
    # Connect to DB
    conn = db.connect()
    cursor = conn.cursor()

    # Prepare query to fetch orders
    query = "SELECT * FROM orders WHERE user_id = ?"
    cursor.execute(query, (user_id,))

    # Return result
    return cursor.fetchall()
