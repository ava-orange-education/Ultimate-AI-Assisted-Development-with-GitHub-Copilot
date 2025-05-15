# Prompt Used: Count the number of lines that contain 'error' in a large file using a memory-efficient approach

def count_errors(file_path: str) -> int:
    """Count the number of lines containing the word 'error' in a large file."""
    count = 0
    try:
        with open(file_path, 'r') as file:
            for line in file:
                if 'error' in line.lower():
                    count += 1
    except FileNotFoundError:
        print(f"File not found: {file_path}")
    except Exception as e:
        print(f"Error reading file: {e}")
    return count

# Example usage:
# print(count_errors('server_log.txt'))
