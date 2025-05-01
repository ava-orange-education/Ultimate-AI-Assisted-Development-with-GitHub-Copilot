// Prompt: Legacy implementation of data processing using nested loops
function processData(data) {
  const result = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].active) {
      let transformed = { ...data[i], name: data[i].name.toUpperCase() };
      result.push(transformed);
    }
  }
  return result;
}
