// Prompt: Create a simple Express-based API gateway
const express = require('express');
const proxy = require('http-proxy-middleware').createProxyMiddleware;

const app = express();
app.use('/api/users', proxy({ target: 'http://localhost:3001', changeOrigin: true }));
app.use('/api/orders', proxy({ target: 'http://localhost:3002', changeOrigin: true }));

app.listen(8080, () => console.log('API Gateway running on port 8080'));
