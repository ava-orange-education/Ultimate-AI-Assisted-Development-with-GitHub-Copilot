// Legacy implementation for querying high-value customers

async function getHighValueCustomers() {
    const customers = await db.query('SELECT * FROM customers');
    return customers.filter(customer => customer.totalSpend > 10000);
  }