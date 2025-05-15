# Prompt: Suggest enhancements for Gmail login functional test coverage

## Suggested Enhancements
- Add CAPTCHA validation tests
- Add MFA (Multi-Factor Authentication) checks
- Include password reset and link expiry tests
- Validate error messages for unregistered email

Test Case 4: CAPTCHA Verification
Objective: Verify that a user is prompted with a CAPTCHA challenge after multiple failed login attempts.

Preconditions:

User has a valid Gmail account.
User knows the correct email but enters an incorrect password multiple times.
Steps:

Open a web browser.
Navigate to the Gmail login page: https://mail.google.com/.
Enter the valid email address in the "Email or phone" field.
Click the "Next" button.
Enter an invalid password in the "Enter your password" field.
Click the "Next" button.
Repeat steps 4-6 multiple times until a CAPTCHA challenge is displayed.
Verify that a CAPTCHA challenge is displayed after multiple failed login attempts.
Expected Results:

A CAPTCHA challenge is displayed after multiple failed login attempts.
The user must complete the CAPTCHA challenge to proceed with the login process.

Test Case 5: Automatic Account Lock
Objective: Verify that a user's account is automatically locked after multiple failed login attempts.

Preconditions:

User has a valid Gmail account.
User knows the correct email but enters an incorrect password multiple times.
Steps:

Open a web browser.
Navigate to the Gmail login page: https://mail.google.com/.
Enter the valid email address in the "Email or phone" field.
Click the "Next" button.
Enter an invalid password in the "Enter your password" field.
Click the "Next" button.
Repeat steps 4-6 multiple times until the account is locked.
Verify that an error message is displayed indicating that the account is locked due to multiple failed login attempts.
Expected Results:

An error message is displayed indicating that the account is locked due to multiple failed login attempts.
The user is unable to log in until the account is unlocked.
