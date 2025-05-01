// Prompt: Optimize duplicate detection using a set
function findDuplicates(arr) {
  const seen = new Set();
  const duplicates = new Set();
  for (let val of arr) {
    if (seen.has(val)) duplicates.add(val);
    seen.add(val);
  }
  return Array.from(duplicates);
}
