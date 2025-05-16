// Prompt Used: Why does getUserData fail silently sometimes? Suggest a fix with error handling.

async function getUserData(id: string) {
    try {
      const response = await fetch(`/api/users/${id}`);
      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching user data:", error);
      throw error;
    }
  }
  
  // Example usage:
  // getUserData("123").then(console.log).catch(err => console.error(err.message));
  