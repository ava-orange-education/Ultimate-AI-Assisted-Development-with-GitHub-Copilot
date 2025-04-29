// Prompt Used: Original async function that sometimes fails silently (submitted to Copilot for debugging assistance)

async function getUserData(id: string) {
    const user = await fetch(`/api/users/${id}`);
    return await user.json(); // Throws if user not found or fetch fails
  }
  
  // Example (not recommended for production):
  // getUserData("123").then(console.log);
  