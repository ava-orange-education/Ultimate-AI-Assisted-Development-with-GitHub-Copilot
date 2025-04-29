// Prompt Used: Refactor blog post interface to extract Author as a separate reusable interface

interface Author {
    name: string;
    email: string;
  }
  
  interface BlogPost {
    id: number;
    title: string;
    isPublished: boolean;
    tags: string[];
    author: Author;
  }
  
  // Example usage:
  const post: BlogPost = {
    id: 102,
    title: "Learn Copilot",
    isPublished: true,
    tags: ["typescript", "ai"],
    author: {
      name: "Jane",
      email: "jane@example.com",
    },
  };
  
  console.log(post.title); // Output: Learn Copilot
  