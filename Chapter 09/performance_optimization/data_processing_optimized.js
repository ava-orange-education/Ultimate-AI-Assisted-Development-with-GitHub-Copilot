// Prompt: "Optimize this code for better performance using modern JavaScript methods and reduce memory consumption."

function processData(records) {
    let totalValue = 0;
    const filtered = records.filter(record => {
        if (record.category === 'A') {
            totalValue += record.value;
            return true;
        }
        return false;
    });
    
    return { totalValue, filtered };
}