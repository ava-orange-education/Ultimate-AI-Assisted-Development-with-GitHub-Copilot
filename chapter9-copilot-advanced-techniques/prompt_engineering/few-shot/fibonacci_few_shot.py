# Prompt: Given a few examples, write a function that calculates the Nth Fibonacci number
# Example 1: fibonacci(0) => 0
# Example 2: fibonacci(1) => 1
# Example 3: fibonacci(5) => 5
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)
