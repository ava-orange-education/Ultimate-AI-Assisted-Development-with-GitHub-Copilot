// Prompt: Inefficient customer retrieval with redundant loops
function getCustomersByRegion(customers, region) {
  const output = [];
  for (let i = 0; i < customers.length; i++) {
    if (customers[i].region === region) {
      output.push(customers[i]);
    }
  }
  return output;
}
