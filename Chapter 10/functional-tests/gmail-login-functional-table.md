# Prompt: Generate functional test table for Gmail login

| Test Case ID | Description                    | Steps                                           | Expected Result            |
|--------------|--------------------------------|------------------------------------------------|----------------------------|
| TC001        | Valid Login                    | Enter valid email and password, click Login    | User is redirected to Inbox|
| TC002        | Invalid Password               | Enter valid email and invalid password         | Show "Incorrect password"  |
| TC003        | Empty Fields                   | Leave both fields blank and click Login        | Show "Required" messages   |
| TC004        | Forgot Password Flow           | Click on "Forgot Password" link                | Redirect to recovery screen|
