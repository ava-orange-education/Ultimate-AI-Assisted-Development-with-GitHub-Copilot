# Prompt: Create a shell script to reset user test data in staging DB

#!/bin/bash
echo "Resetting test data in staging environment..."
psql -U test_user -d staging_db -c "DELETE FROM users WHERE email LIKE 'testuser%@example.com';"
psql -U test_user -d staging_db -c "INSERT INTO users (name, email) VALUES ('Test User', 'testuser1@example.com');"
echo "Test data reset completed."
