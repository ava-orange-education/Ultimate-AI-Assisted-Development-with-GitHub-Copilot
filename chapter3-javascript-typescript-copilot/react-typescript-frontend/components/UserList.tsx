// Prompt Used: Create a React functional component in TypeScript that displays a list of users

// biome-ignore lint/style/useImportType: <explanation>
import React from 'react';

interface User {
  name: string;
  age: number;
  isAdmin: boolean;
}

const users: User[] = [
  { name: "John", age: 30, isAdmin: true },
  { name: "Jane", age: 25, isAdmin: false },
  { name: "Doe", age: 22, isAdmin: false }
];

const UserList: React.FC = () => {
  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.name} - Age: {user.age} - Admin: {user.isAdmin ? "Yes" : "No"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
