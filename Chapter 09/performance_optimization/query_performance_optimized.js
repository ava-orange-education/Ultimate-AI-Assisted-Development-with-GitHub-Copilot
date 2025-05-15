// Prompt: "Optimize this code to perform filtering at the database query level to reduce unnecessary data processing."

async function getHighValueCustomers() {
    const customers = await db.query('SELECT * FROM customers WHERE totalSpend > 10000');
    return customers;
  }