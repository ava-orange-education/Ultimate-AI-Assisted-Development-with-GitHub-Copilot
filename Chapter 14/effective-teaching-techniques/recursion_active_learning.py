# Copilot Prompt: "Generate a recursive function to demonstrate active learning for recursion."
def countdown(n):
    if n <= 0:
        print("Lift off!")
    else:
        print(n)
        countdown(n - 1)

# Example: Modify and experiment by changing the starting number
countdown(5)
