// Prompt Used: Define a TypeScript interface for the blog post object with nested author

interface BlogPost {
    id: number;
    title: string;
    isPublished: boolean;
    tags: string[];
    author: {
      name: string;
      email: string;
    };
  }
  
  // Example usage:
  const post: BlogPost = {
    id: 102,
    title: "Learn Copilot",
    isPublished: true,
    tags: ["ai", "typescript"],
    author: {
      name: "Jane",
      email: "jane@example.com",
    },
  };
  
  console.log(post.author.name); // Output: Jane
  