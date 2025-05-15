// Prompt: "Optimize this function for performance and ensure it logs duplicate transactions for debugging purposes."

function findDuplicateTransactions(transactions) {
    const seen = new Set();
    const duplicates = [];
    
    transactions.forEach(transaction => {
      if (seen.has(transaction.id)) {
        duplicates.push(transaction);
        console.log(`Duplicate found: ${transaction.id}`);
      } else {
        seen.add(transaction.id);
      }
    });
    
    return duplicates;
  }