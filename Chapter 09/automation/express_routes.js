// Example of automatically generated Express.js routes with validation

const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');

// Get all orders
router.get('/orders', async (req, res) => {
  try {
    const orders = await Order.find().populate('user');
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Get order by ID
router.get('/orders/:id', async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate('user');
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }
    res.json(order);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Create new order
router.post('/orders', [
  body('items').isArray().withMessage('Items must be an array'),
  body('items.*.productId').notEmpty().withMessage('Product ID is required'),
  body('items.*.quantity').isInt({ min: 1 }).withMessage('Quantity must be at least 1')
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  
  try {
    const order = new Order({
      user: req.user.id,
      items: req.body.items,
      status: 'pending'
    });
    
    await order.save();
    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Update order
router.put('/orders/:id', async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }
    
    // Check if user owns this order
    if (order.user.toString() !== req.user.id) {
      return res.status(401).json({ error: 'Not authorized' });
    }
    
    // Only allow updates if order is pending
    if (order.status !== 'pending') {
      return res.status(400).json({ error: 'Cannot update processed orders' });
    }
    
    if (req.body.items) order.items = req.body.items;
    if (req.body.address) order.address = req.body.address;
    
    await order.save();
    res.json(order);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Delete order
router.delete('/orders/:id', async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }
    
    // Check if user owns this order
    if (order.user.toString() !== req.user.id) {
      return res.status(401).json({ error: 'Not authorized' });
    }
    
    // Only allow deletion if order is pending
    if (order.status !== 'pending') {
      return res.status(400).json({ error: 'Cannot delete processed orders' });
    }
    
    await order.remove();
    res.json({ message: 'Order removed' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;