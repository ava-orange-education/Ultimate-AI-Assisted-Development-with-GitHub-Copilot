// Prompt Used: Implement CRUD routes for users using Express and TypeScript

import express from 'express';
import { User } from '../models/user';

export const userRoutes = express.Router();

const users: User[] = [];

userRoutes.get('/', (req, res) => {
  res.json(users);
});

userRoutes.get('/:id', (req, res) => {
  const user = users.find(u => u.id === Number(req.params.id));
  user ? res.json(user) : res.status(404).send('User not found');
});

userRoutes.post('/', (req, res) => {
  const newUser: User = req.body;
  users.push(newUser);
  res.status(201).json(newUser);
});

userRoutes.put('/:id', (req, res) => {
  const index = users.findIndex(u => u.id === Number(req.params.id));
  if (index !== -1) {
    users[index] = req.body as User;
    res.json(users[index]);
  } else {
    res.status(404).send('User not found');
  }
});

userRoutes.delete('/:id', (req, res) => {
  const index = users.findIndex(u => u.id === Number(req.params.id));
  if (index !== -1) {
    users.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).send('User not found');
  }
});
