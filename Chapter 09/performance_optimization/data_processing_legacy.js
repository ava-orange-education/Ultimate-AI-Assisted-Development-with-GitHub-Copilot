// Legacy implementation for data processing

function processData(records) {
    let totalValue = 0;
    let filtered = [];
    
    for (let i = 0; i < records.length; i++) {
      if (records[i].category === 'A') {
        totalValue += records[i].value;
        filtered.push(records[i]);
      }
    }
    
    return { totalValue, filtered };
  }