// Prompt: "Generate a REST API structure in Node.js with Express for basic CRUD operations on a products resource."

const express = require('express');
const app = express();
app.use(express.json());

const products = [];

// Create a new product
app.post('/products', (req, res) => {
  const product = { id: Date.now(), ...req.body };
  products.push(product);
  res.status(201).json(product);
});

// Read all products
app.get('/products', (req, res) => {
  res.json(products);
});

// Update a product
app.put('/products/:id', (req, res) => {
  const index = products.findIndex(p => p.id === parseInt(req.params.id));
  if (index !== -1) {
    products[index] = { ...products[index], ...req.body };
    res.json(products[index]);
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
});

// Delete a product
app.delete('/products/:id', (req, res) => {
  const index = products.findIndex(p => p.id === parseInt(req.params.id));
  if (index !== -1) {
    products.splice(index, 1);
    res.json({ message: 'Product deleted' });
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));