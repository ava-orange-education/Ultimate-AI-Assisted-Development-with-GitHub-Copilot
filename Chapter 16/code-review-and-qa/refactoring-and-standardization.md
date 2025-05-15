# Refactoring and Standardization with AI

<!-- Copilot Prompt: "Refactor redundant Java methods into a single method." -->

This section explains how GitHub Copilot supports code refactoring to eliminate duplication and standardize logic.

### Redundant Java Code

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

### AI-Suggested Refactored Code

```java
public class Calculator {
    public int add(int a, int b) {
        return a + b;
    }
}
```

The refactor removes unnecessary duplication and enforces cleaner design.