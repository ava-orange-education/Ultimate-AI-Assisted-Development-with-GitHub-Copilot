// Prompt: Optimize processData using filter and map
function processData(data) {
  return data
    .filter(item => item.active)
    .map(item => ({ ...item, name: item.name.toUpperCase() }));
}
