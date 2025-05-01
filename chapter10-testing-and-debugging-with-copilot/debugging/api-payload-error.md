# Prompt: Debug API payload mismatch issue

## Symptom
- API returns 400 Bad Request when sending JSON

## Debugging Steps
1. Validate request payload matches schema.
2. Check content-type header is `application/json`.
3. Use Postman or curl to isolate issue.
4. Review backend logs for deserialization errors.

## Example Fix:
```json
// Wrong
{ "amount": "100" }  // string instead of number

// Correct
{ "amount": 100 }
```
