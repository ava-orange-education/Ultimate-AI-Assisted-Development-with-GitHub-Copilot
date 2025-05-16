# Prompt Used: Write a Python script that fills missing values in a DataFrame using the column median

import pandas as pd

def fill_missing_with_median(df: pd.DataFrame) -> pd.DataFrame:
    """Fill missing values in the DataFrame using the median of each column."""
    return df.fillna(df.median(numeric_only=True))

# Example usage:
if __name__ == "__main__":
    data = {
        'price': [100, 200, None, 400, 500],
        'quantity': [10, None, 30, None, 50]
    }
    df = pd.DataFrame(data)
    print("Original DataFrame:\n", df)

    df_filled = fill_missing_with_median(df)
    print("\nDataFrame after filling missing values:\n", df_filled)
