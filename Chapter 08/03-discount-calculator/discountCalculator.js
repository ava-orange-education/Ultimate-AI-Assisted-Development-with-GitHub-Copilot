// GitHub Copilot Prompt:
// Write a Node.js function to calculate discounts based on a promotion code.
// Handle valid codes, invalid codes, and cases where no code is provided.

const promotionCodes = {
    'SUMMER21': 0.10, // 10% discount
    'WINTER21': 0.15, // 15% discount
    'SPRING21': 0.20  // 20% discount
};

function calculateDiscount(price, promoCode = null) {
    if (typeof price !== 'number' || price <= 0) {
        throw new Error('Invalid price. Price must be a positive number.');
    }

    let discount = 0;
    let message = 'No promotion code applied.';

    if (promoCode) {
        if (promotionCodes.hasOwnProperty(promoCode)) {
            discount = promotionCodes[promoCode];
            message = `Promotion code '${promoCode}' applied. You saved ${discount * 100}%.`;
        } else {
            message = `Invalid promotion code '${promoCode}'. No discount applied.`;
        }
    }

    const finalPrice = price - (price * discount);
    return {
        finalPrice: finalPrice.toFixed(2),
        message: message
    };
}

module.exports = calculateDiscount;
