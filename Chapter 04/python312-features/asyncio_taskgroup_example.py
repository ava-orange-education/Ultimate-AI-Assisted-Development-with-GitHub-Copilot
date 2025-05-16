# Prompt Used: Write an async function in Python 3.12 using TaskGroup to run multiple tasks concurrently

import asyncio

async def fetch_data(source: str) -> str:
    await asyncio.sleep(1)  # Simulate network delay
    return f"Data from {source}"

async def main():
    async with asyncio.TaskGroup() as tg:
        task1 = tg.create_task(fetch_data("API A"))
        task2 = tg.create_task(fetch_data("API B"))

    # Task results would be available through task1.result() or task2.result() after TaskGroup context exits
    print(task1.result())
    print(task2.result())

# Example usage:
if __name__ == "__main__":
    asyncio.run(main())
