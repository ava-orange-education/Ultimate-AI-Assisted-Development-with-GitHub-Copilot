// Prompt: Provide boilerplate for an Express route handler
const express = require('express');
const router = express.Router();

router.get('/status', (req, res) => {
  res.status(200).json({ message: 'API is running' });
});

module.exports = router;
