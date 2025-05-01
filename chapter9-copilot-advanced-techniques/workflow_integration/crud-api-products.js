// Prompt: Generate a CRUD API for products using Express
const express = require('express');
const app = express();
app.use(express.json());

let products = [];

app.get('/products', (req, res) => res.json(products));
app.post('/products', (req, res) => {
  products.push(req.body);
  res.status(201).send('Product created');
});
app.put('/products/:id', (req, res) => {
  const id = +req.params.id;
  products[id] = req.body;
  res.send('Product updated');
});
app.delete('/products/:id', (req, res) => {
  const id = +req.params.id;
  products.splice(id, 1);
  res.send('Product deleted');
});
