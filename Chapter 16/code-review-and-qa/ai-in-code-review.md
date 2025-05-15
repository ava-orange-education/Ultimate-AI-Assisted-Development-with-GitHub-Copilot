# AI in Code Review and Optimization

<!-- Copilot Prompt: "Analyze the following Python function and suggest performance optimizations." -->

This section demonstrates how GitHub Copilot assists in optimizing inefficient code by identifying better algorithms.

### Original Code (Before AI Review)

```python
def find_duplicates(nums):
    duplicates = []
    for i in range(len(nums)):
        for j in range(i + 1, len(nums)):
            if nums[i] == nums[j] and nums[i] not in duplicates:
                duplicates.append(nums[i])
    return duplicates
```

### AI-Suggested Optimization

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

This change improves time complexity from O(n²) to O(n), reducing runtime significantly.