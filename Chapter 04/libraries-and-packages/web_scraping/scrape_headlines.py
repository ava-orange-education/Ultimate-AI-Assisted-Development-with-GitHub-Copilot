# Prompt Used: Write a Python script using `requests` and `BeautifulSoup` to scrape and print all headlines from a news website

import requests
from bs4 import BeautifulSoup

def scrape_headlines(url: str, tag: str, class_name: str):
    """Scrape and print headlines from the specified website."""
    try:
        response = requests.get(url)
        response.raise_for_status()
        soup = BeautifulSoup(response.text, 'html.parser')
        headlines = soup.find_all(tag, class_=class_name)

        for headline in headlines:
            print(headline.get_text(strip=True))

    except requests.RequestException as e:
        print(f"An error occurred: {e}")

# Example usage:
if __name__ == "__main__":
    news_url = "https://example.com/news"
    scrape_headlines(news_url, "h2", "headline-class")  # Update tag and class as per actual site
