// Prompt: Add logs for finding duplicates and track performance
function findDuplicates(arr) {
  console.time("duplicateCheck");
  const seen = new Set();
  const duplicates = new Set();
  for (let val of arr) {
    console.log(`Checking: ${val}`);
    if (seen.has(val)) {
      console.warn(`Duplicate found: ${val}`);
      duplicates.add(val);
    }
    seen.add(val);
  }
  console.timeEnd("duplicateCheck");
  return Array.from(duplicates);
}
