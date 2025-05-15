# Prompt Used: Write a Python function to calculate the factorial of a number

def factorial(n: int) -> int:
    """Calculate the factorial of a number recursively."""
    if n == 0:
        return 1
    else:
        return n * factorial(n - 1)

# Example usage:
if __name__ == "__main__":
    number = 5
    result = factorial(number)
    print(f"The factorial of {number} is {result}")
