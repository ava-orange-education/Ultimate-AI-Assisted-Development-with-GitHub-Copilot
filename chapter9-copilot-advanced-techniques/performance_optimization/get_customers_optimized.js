// Prompt: Optimize getCustomersByRegion with filter
function getCustomersByRegion(customers, region) {
  return customers.filter(customer => customer.region === region);
}
