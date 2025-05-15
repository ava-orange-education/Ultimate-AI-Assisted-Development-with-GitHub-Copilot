# Copilot Prompt: "Scaffold a basic Python CLI budget app to demonstrate project-based learning."
class Budget:
    def __init__(self):
        self.expenses = []

    def add_expense(self, item, amount):
        self.expenses.append((item, amount))

    def show_expenses(self):
        for item, amount in self.expenses:
            print(f"{item}: ${amount}")

    def total_spent(self):
        return sum(amount for _, amount in self.expenses)

# Example usage
my_budget = Budget()
my_budget.add_expense("Coffee", 4.5)
my_budget.add_expense("Groceries", 60)
my_budget.show_expenses()
print("Total:", my_budget.total_spent())
