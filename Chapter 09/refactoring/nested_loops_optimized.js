// Prompt: "Optimize this function to improve performance."

function findDuplicateTransactions(transactions) {
    const seen = new Set();
    const duplicates = [];
    
    transactions.forEach(transaction => {
      if (seen.has(transaction.id)) {
        duplicates.push(transaction);
      } else {
        seen.add(transaction.id);
      }
    });
    
    return duplicates;
  }