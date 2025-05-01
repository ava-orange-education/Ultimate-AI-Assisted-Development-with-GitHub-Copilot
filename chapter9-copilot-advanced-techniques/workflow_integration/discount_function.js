// Prompt: Create a function to apply discount logic
function applyDiscount(price, discountPercent) {
  if (discountPercent < 0 || discountPercent > 100) {
    throw new Error("Invalid discount percent");
  }
  return price - (price * discountPercent / 100);
}
