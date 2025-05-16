// Few-Shot Prompting Example
// Prompt:
// # Example 1: Calculate factorial
// def factorial(n):
//   if n == 0:
//     return 1
//   return n * factorial(n - 1)
// 
// # Example 2: Calculate the sum of an array
// def sum_array(arr):
//   if len(arr) == 0:
//     return 0
//   return arr[0] + sum_array(arr[1:])
// 
// # Task: Write a function to calculate the nth Fibonacci number using recursion.

// This is an example of what GitHub Copilot might generate with the above prompt
def fibonacci(n):
    if n <= 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fibonacci(n - 1) + fibonacci(n - 2)