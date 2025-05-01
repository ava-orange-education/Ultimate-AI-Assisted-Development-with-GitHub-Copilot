# Prompt Used: Use a generator to count lines with 'error' in a large file

def count_errors_generator(file_path: str) -> int:
    """Memory-efficiently count 'error' lines using a generator expression."""
    try:
        with open(file_path, 'r') as file:
            return sum(1 for line in file if 'error' in line.lower())
    except FileNotFoundError:
        print(f"File not found: {file_path}")
        return 0
    except Exception as e:
        print(f"Error reading file: {e}")
        return 0

# Example usage:
# print(count_errors_generator('server_log.txt'))
