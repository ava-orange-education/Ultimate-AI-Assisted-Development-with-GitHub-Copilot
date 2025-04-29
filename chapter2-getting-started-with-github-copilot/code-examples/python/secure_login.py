def login_user(username, password):
    """
    Authenticate a user by validating their username and password
    
    Args:
        username (str): The user's username
        password (str): The user's password
        
    Returns:
        dict: A dictionary containing authentication status and user info if successful
    """
    # 1. Retrieve the user from the database
    user = get_user_by_username(username)
    
    # 2. Check if user exists
    if not user:
        return {"success": False, "message": "Invalid username or password"}
    
    # 3. Verify the password against stored hash
    # Note: This assumes passwords are stored as hashes, not plaintext
    if not verify_password(password, user.password_hash):
        return {"success": False, "message": "Invalid username or password"}
    
    # 4. Generate authentication token
    token = generate_auth_token(user.id)
    
    # 5. Return successful authentication with user info
    return {
        "success": True,
        "user_id": user.id,
        "username": user.username,
        "token": token
    }

# Example helper functions (these would need to be implemented in a real application)
def get_user_by_username(username):
    # In a real implementation, this would query a database
    # For example: return User.query.filter_by(username=username).first()
    pass

def verify_password(plain_password, hashed_password):
    # In a real implementation, this would use a password hashing library
    # For example: return bcrypt.checkpw(plain_password.encode(), hashed_password)
    pass

def generate_auth_token(user_id):
    # In a real implementation, this would generate a JWT or other token
    # For example: return jwt.encode({"user_id": user_id, "exp": datetime.now() + timedelta(hours=1)}, SECRET_KEY)
    pass