// Prompt Used: Write a TypeScript function that adds two numbers, checks if both are numbers and throws an error if not

function addWithCheck(a: unknown, b: unknown): number {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error("Inputs must be numbers");
    }
    return a + b;
  }
  
  console.log(addWithCheck(4, 6));       // Output: 10
  // console.log(addWithCheck("4", 6));  // Will throw an error
  