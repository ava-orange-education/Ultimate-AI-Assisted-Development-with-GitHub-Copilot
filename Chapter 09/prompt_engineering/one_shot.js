// One-Shot Prompting Example
// Prompt:
// # Example: Calculate factorial
// def factorial(n):
//   if n == 0:
//     return 1
//   return n * factorial(n - 1)
// 
// # Task: Write a function to calculate the sum of an array using recursion.

// This is an example of what GitHub Copilot might generate with the above prompt
def sum_array(arr):
    if len(arr) == 0:
        return 0
    return arr[0] + sum_array(arr[1:])