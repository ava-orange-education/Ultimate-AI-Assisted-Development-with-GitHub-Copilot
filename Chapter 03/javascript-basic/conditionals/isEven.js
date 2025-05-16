// Prompt Used: Write a JavaScript function that checks if a number is even or odd using a conditional statement.

// Function to check if a number is even or odd using a conditional statement


function isEvenOrOdd(num) {
  if (num % 2 === 0) {
    return "Even";
  // biome-ignore lint/style/noUselessElse: <explanation>
  } else {
    return "Odd";
  }
}

// Example usage
console.log(isEvenOrOdd(4)); // "Even"
console.log(isEvenOrOdd(7)); // "Odd"
