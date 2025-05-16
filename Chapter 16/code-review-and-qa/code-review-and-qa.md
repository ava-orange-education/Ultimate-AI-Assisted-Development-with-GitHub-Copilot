# Code Review and Quality Assurance with AI

This section explores how AI enhances the code review process, automates security auditing, improves test coverage, and helps in standardizing and refactoring code.

---

## AI in Code Review and Optimization

<!-- Copilot Prompt: "Analyze the following Python function and suggest performance optimizations." -->

AI tools automatically review code for performance bottlenecks and suggest better implementations.

### Original Code (Before AI Review):

```python
def find_duplicates(nums):
    duplicates = []
    for i in range(len(nums)):
        for j in range(i + 1, len(nums)):
            if nums[i] == nums[j] and nums[i] not in duplicates:
                duplicates.append(nums[i])
    return duplicates
```

### AI-Suggested Optimization (Using Sets):

```python
def find_duplicates(nums):
    seen = set()
    duplicates = set()
    for num in nums:
        if num in seen:
            duplicates.add(num)
        seen.add(num)
    return list(duplicates)
```

---

## AI in Security Audits

<!-- Copilot Prompt: "Detect SQL injection vulnerability in the following Python function and secure it." -->

AI detects potential security flaws such as SQL injection and recommends safer alternatives.

### Vulnerable Code:

```python
def get_user_data(user_id):
    query = f"SELECT * FROM users WHERE id = {user_id}"
    return execute_query(query)
```

### AI-Suggested Secure Fix:

```python
def get_user_data(user_id):
    query = "SELECT * FROM users WHERE id = %s"
    return execute_query(query, (user_id,))
```

---

## AI in Test Coverage and Bug Detection

<!-- Copilot Prompt: "Analyze the following test suite and suggest missing test cases." -->

AI evaluates existing tests and recommends improvements or additions for better coverage.

### Existing Partial Test Suite:

```python
import unittest
from user_auth import login

class TestLogin(unittest.TestCase):
    def test_valid_login(self):
        self.assertTrue(login("admin", "password"))
```

### AI-Suggested Additional Tests:

```python
def test_empty_username_password(self):
    self.assertFalse(login("", ""))

def test_sql_injection_attempt(self):
    self.assertFalse(login("' OR 1=1 --", "password"))
```

---

## Refactoring and Standardization with AI

<!-- Copilot Prompt: "Refactor redundant Java methods into a single method." -->

AI helps reduce redundancy and enforce consistent code standards.

### Code Before Refactor:

```java
public class Calculator {
    public int add(int a, int b) {
        return a + b;
    }

    public int sum(int a, int b) {
        return a + b;
    }
}
```

### AI-Suggested Refactor:

```java
public class Calculator {
    public int add(int a, int b) {
        return a + b;
    }
}
```

This reduces duplication, improves readability, and aligns with clean code principles.