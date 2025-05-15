# AI-Assisted Debugging

<!-- Copilot Prompt: "Demonstrate how AI can debug an async function with race condition issues." -->

AI tools help detect, explain, and resolve concurrency bugs like race conditions.

```javascript
async function fetchData() {
  let data;
  try {
    const result = await fetch('/api/data');
    data = await result.json();
  } catch (error) {
    console.error('Failed:', error);
  }
  return data;
}
```

Copilot may suggest adding retries, using debounce or ensuring atomic state updates depending on context.