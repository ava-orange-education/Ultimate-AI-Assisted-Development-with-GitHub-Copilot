<!-- Copilot Prompt: "Explain the importance of writing context-aware prompts when using GitHub Copilot in enterprise codebases." -->

## Use Context-Aware Prompts

GitHub Copilot relies on surrounding context to generate accurate code suggestions. Writing structured, clear prompts increases relevance and correctness.

Best Practices:
- Use descriptive function names that clarify the intent.
- Include docstrings to specify expected behavior, parameters, and return values.
- Maintain logical file and module organization.
- Break down complex tasks into smaller, well-defined functions.

Example:

Instead of:

def process(x, y):
    # logic

Use:

def process_customer_order(order_id: int, customer_data: dict) -> bool:
    """
    Processes a customer order and updates the database.
    Returns True if successful.
    """
