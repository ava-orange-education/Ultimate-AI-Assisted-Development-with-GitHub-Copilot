# Prompt Used: Fix the bug when nums is an empty list in a function that calculates average

def get_average(nums: list) -> float:
    """Safely calculate the average of a list, returning 0 if the list is empty."""
    if not nums:
        return 0
    return sum(nums) / len(nums)

# Example usage:
if __name__ == "__main__":
    print(get_average([10, 20, 30]))  # Output: 20.0
    print(get_average([]))            # Output: 0
