# Prompt Used: Optimize a Python for-loop that sums elements in a list

def sum_elements(numbers: list) -> int:
    """Sum elements of a list using a for-loop (initial method)."""
    total = 0
    for num in numbers:
        total += num
    return total

def optimized_sum_elements(numbers: list) -> int:
    """Optimized sum using Python's built-in sum() function."""
    return sum(numbers)

# Example usage:
if __name__ == "__main__":
    sample_numbers = [1, 2, 3, 4, 5]

    # Using for-loop method
    result_original = sum_elements(sample_numbers)
    print(f"Original sum using for-loop: {result_original}")

    # Using optimized sum()
    result_optimized = optimized_sum_elements(sample_numbers)
    print(f"Optimized sum using built-in sum(): {result_optimized}")
