# Fullstack AI Applications

<!-- Copilot Prompt: "Generate a basic fullstack application using React frontend and Node.js backend." -->

GitHub Copilot enables the rapid development of fullstack applications. Below is a sample layout:

## Frontend: React

```javascript
import React from 'react';
import axios from 'axios';

function App() {
  const handleLogin = async () => {
    const response = await axios.post('/api/login', { username: 'test' });
    console.log(response.data);
  };

  return <button onClick={handleLogin}>Login</button>;
}

export default App;
```

## Backend: Node.js + Express

```javascript
const express = require('express');
const app = express();
app.use(express.json());

app.post('/api/login', (req, res) => {
  res.json({ message: 'Login successful' });
});

app.listen(5000, () => console.log('Server running on port 5000'));
```