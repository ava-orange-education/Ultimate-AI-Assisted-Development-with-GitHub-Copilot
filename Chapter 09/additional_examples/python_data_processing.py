# Prompt: "Write a Python script to process a CSV file and calculate the total sales for each category."

import csv

def calculate_sales(file_path):
    sales_by_category = {}
    
    with open(file_path, mode='r') as file:
        reader = csv.DictReader(file)
        
        for row in reader:
            category = row['Category']
            sales = float(row['Sales'])
            
            if category in sales_by_category:
                sales_by_category[category] += sales
            else:
                sales_by_category[category] = sales
    
    return sales_by_category

def main():
    file_path = 'sales_data.csv'
    
    try:
        category_sales = calculate_sales(file_path)
        
        print("Sales by Category:")
        print("-----------------")
        
        for category, total in sorted(category_sales.items(), key=lambda x: x[1], reverse=True):
            print(f"{category}: ${total:,.2f}")
            
        total_sales = sum(category_sales.values())
        print("-----------------")
        print(f"Total Sales: ${total_sales:,.2f}")
        
    except FileNotFoundError:
        print(f"Error: The file {file_path} was not found.")
    except KeyError as e:
        print(f"Error: The CSV file is missing the expected column: {e}")
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    main()