# Prompt Used: Write a Python function that reads a CSV file using pandas and calculates the average value of a column named 'price'

import pandas as pd

def calculate_average_price(csv_file: str) -> float:
    """Reads a CSV file and calculates the average of the 'price' column."""
    try:
        df = pd.read_csv(csv_file)
        if 'price' not in df.columns:
            raise ValueError("The CSV file does not contain a 'price' column.")
        return df['price'].mean()
    except Exception as e:
        print(f"Error reading the file: {e}")
        return float('nan')

# Example usage:
if __name__ == "__main__":
    file_path = "sample_prices.csv"
    average_price = calculate_average_price(file_path)
    if not pd.isna(average_price):
        print(f"The average price is {average_price:.2f}")
