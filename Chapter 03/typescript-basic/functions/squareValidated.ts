// Prompt Used: Create a TypeScript function that takes a number as input, validates if it's a positive integer, and then returns the square of that number

function validatedSquare(num: number): number {
    if (!Number.isInteger(num) || num < 0) {
      return -1;
    }
    return num * num;
  }
  
  console.log(validatedSquare(4));   // 16
  console.log(validatedSquare(-3));  // -1
  console.log(validatedSquare(2.5)); // -1
  