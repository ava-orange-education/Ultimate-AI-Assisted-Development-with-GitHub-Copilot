// Legacy code for identifying duplicate transactions using nested loops

function findDuplicateTransactions(transactions) {
    let duplicates = [];
    for (let i = 0; i < transactions.length; i++) {
      for (let j = i + 1; j < transactions.length; j++) {
        if (transactions[i].id === transactions[j].id) {
          duplicates.push(transactions[i]);
          break;
        }
      }
    }
    return duplicates;
  }