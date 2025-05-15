// Prompt: "Add comments for the processOrder function."

/**
 * Processes an order and calculates the total cost.
 * @param {object} order - The order object with items and quantities.
 * @returns {number} - The total cost of the order.
 */
function processOrder(order) {
    // Calculate the total cost of the items in the order
    return order.items.reduce((total, item) => total + item.price * item.quantity, 0);
  }