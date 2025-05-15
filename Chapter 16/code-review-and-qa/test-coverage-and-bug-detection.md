# AI in Test Coverage and Bug Detection

<!-- Copilot Prompt: "Analyze the following test suite and suggest missing test cases." -->

This section shows how AI improves test coverage by suggesting new tests for edge cases and vulnerabilities.

### Existing Test Code

```python
import unittest
from user_auth import login

class TestLogin(unittest.TestCase):
    def test_valid_login(self):
        self.assertTrue(login("admin", "password"))
```

### AI-Suggested Additional Test Cases

```python
def test_empty_username_password(self):
    self.assertFalse(login("", ""))

def test_sql_injection_attempt(self):
    self.assertFalse(login("' OR 1=1 --", "password"))
```

These tests help detect improper input handling and improve software robustness.