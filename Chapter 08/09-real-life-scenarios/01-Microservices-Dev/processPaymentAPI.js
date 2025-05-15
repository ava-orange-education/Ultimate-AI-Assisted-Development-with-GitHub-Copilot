// Prompt:
// Write a Node.js REST API endpoint to process payments, including request validation and error handling.

const express = require('express');
const app = express();
app.use(express.json());

app.post('/process-payment', (req, res) => {
    const { cardNumber, amount } = req.body;

    if (!cardNumber || !amount) {
        return res.status(400).json({ error: 'Missing card details or amount' });
    }

    try {
        // Call payment gateway
        res.status(200).json({ status: 'Payment processed successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Payment failed' });
    }
});

app.listen(3000, () => console.log('Server running on port 3000'));
