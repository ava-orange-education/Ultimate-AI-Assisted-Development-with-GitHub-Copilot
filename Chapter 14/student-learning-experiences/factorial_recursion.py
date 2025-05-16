# Copilot Prompt: "Explain recursion with a simple Python example."
def factorial(n):
    if n == 0:
        return 1
    return n * factorial(n - 1)

print(factorial(5))  # Output: 120
