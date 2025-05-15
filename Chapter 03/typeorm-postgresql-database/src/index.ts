// Prompt Used: Set up TypeORM in a Node.js project to connect to a PostgreSQL database and implement basic CRUD operations

import 'reflect-metadata';
import { createConnection } from 'typeorm';
import express from 'express';
import bodyParser from 'body-parser';
import { User } from './entity/User';
import ormconfig from '../ormconfig';

const app = express();
const port = 3000;

app.use(bodyParser.json());

createConnection(ormconfig).then(async (connection) => {
  const userRepository = connection.getRepository(User);

  app.get('/users', async (_req, res) => {
    const users = await userRepository.find();
    res.json(users);
  });

  app.get('/users/:id', async (req, res) => {
    const user = await userRepository.findOneBy({ id: Number(req.params.id) });
    if (user) {
      res.json(user);
    } else {
      res.status(404).send('User not found');
    }
  });

  app.post('/users', async (req, res) => {
    const newUser = userRepository.create(req.body);
    const result = await userRepository.save(newUser);
    res.status(201).json(result);
  });

  app.put('/users/:id', async (req, res) => {
    const user = await userRepository.findOneBy({ id: Number(req.params.id) });
    if (user) {
      userRepository.merge(user, req.body);
      const result = await userRepository.save(user);
      res.json(result);
    } else {
      res.status(404).send('User not found');
    }
  });

  app.delete('/users/:id', async (req, res) => {
    const result = await userRepository.delete(req.params.id);
    if (result.affected) {
      res.status(204).send();
    } else {
      res.status(404).send('User not found');
    }
  });

  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
}).catch((error) => console.log(error));
