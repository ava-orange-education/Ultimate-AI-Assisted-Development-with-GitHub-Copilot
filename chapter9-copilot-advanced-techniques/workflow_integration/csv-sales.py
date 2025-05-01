# Prompt: Write a Python script to load and process CSV sales data
import csv

def read_sales(file_path):
    total = 0
    with open(file_path, newline='') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            total += float(row['amount'])
    print(f"Total Sales: ${total:.2f}")

read_sales('sales.csv')
