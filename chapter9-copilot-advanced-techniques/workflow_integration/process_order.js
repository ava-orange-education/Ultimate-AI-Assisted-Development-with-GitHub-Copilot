// Prompt: Generate order processing logic
function processOrder(order) {
  if (!order.items || order.items.length === 0) {
    throw new Error("Order is empty");
  }
  return {
    status: 'processed',
    total: order.items.reduce((acc, item) => acc + item.price, 0),
  };
}
