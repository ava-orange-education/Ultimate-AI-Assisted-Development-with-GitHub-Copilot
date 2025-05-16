/**
 * Calculate the discounted price of a product
 * @param {number} price - The original price of the product
 * @param {number} discountPercentage - The discount percentage (0-100)
 * @returns {number} - The final price after discount
 * @throws {Error} - If inputs are invalid
 */
function calculateDiscount(price, discountPercentage) {
    if (price <= 0 || discountPercentage < 0 || discountPercentage > 100) {
      throw new Error('Invalid input');
    }
    
    return price - (price * (discountPercentage / 100));
  }
  
  module.exports = { calculateDiscount };