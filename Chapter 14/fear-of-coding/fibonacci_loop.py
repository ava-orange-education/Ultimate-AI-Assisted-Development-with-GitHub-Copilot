# Copilot Prompt: "Write a program that prints the first 10 Fibonacci numbers using a loop."
a, b = 0, 1
for _ in range(10):
    print(a)
    a, b = b, a + b
