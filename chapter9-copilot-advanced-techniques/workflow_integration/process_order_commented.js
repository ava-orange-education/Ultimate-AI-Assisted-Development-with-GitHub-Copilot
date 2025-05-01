// Prompt: Add inline comments to explain the processOrder function
function processOrder(order) {
  // Check if order has valid items
  if (!order.items || order.items.length === 0) {
    throw new Error("Order is empty");
  }

  // Calculate total price and return response
  return {
    status: 'processed',
    total: order.items.reduce((acc, item) => acc + item.price, 0),
  };
}
