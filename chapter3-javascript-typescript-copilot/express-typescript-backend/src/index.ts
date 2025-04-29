// Prompt Used: Create a simple REST API using Express and TypeScript that handles user-related routes

import express from 'express';
import { userRoutes } from './routes/userRoutes';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/users', userRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
