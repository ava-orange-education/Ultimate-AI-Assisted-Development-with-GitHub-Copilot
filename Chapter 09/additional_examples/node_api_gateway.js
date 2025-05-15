// Prompt: "Generate a Node.js API gateway service that routes requests to multiple microservices."

const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const morgan = require('morgan');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Apply basic security middleware
app.use(helmet());
app.use(express.json());
app.use(morgan('combined'));

// Configure rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(limiter);

// Service endpoints configuration
const SERVICES = {
  user: {
    url: process.env.USER_SERVICE_URL || 'http://user-service:3001',
    pathRewrite: {'^/api/users': '/users'}
  },
  order: {
    url: process.env.ORDER_SERVICE_URL || 'http://order-service:3002',
    pathRewrite: {'^/api/orders': '/orders'}
  },
  product: {
    url: process.env.PRODUCT_SERVICE_URL || 'http://product-service:3003',
    pathRewrite: {'^/api/products': '/products'}
  },
  payment: {
    url: process.env.PAYMENT_SERVICE_URL || 'http://payment-service:3004',
    pathRewrite: {'^/api/payments': '/payments'}
  }
};

// Authentication middleware
const authenticate = (req, res, next) => {
  const token = req.headers.authorization;
  
  if (!token) {
    return res.status(401).json({ error: 'Authentication required' });
  }
  
  // In a real application, you would validate the token here
  // For example, verifying a JWT or checking a session store
  
  next();
};

// Create proxy middleware for each service
Object.keys(SERVICES).forEach(serviceName => {
  const service = SERVICES[serviceName];
  const pathPattern = new RegExp(`^/api/${serviceName}`);
  
  app.use(
    pathPattern,
    authenticate, // Apply authentication middleware
    createProxyMiddleware({
      target: service.url,
      changeOrigin: true,
      pathRewrite: service.pathRewrite,
      logLevel: 'warn'
    })
  );
  
  console.log(`Proxy configured for ${serviceName} service: ${service.url}`);
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP', services: Object.keys(SERVICES) });
});

// Error handling for routes that don't match any service
app.use((req, res) => {
  res.status(404).json({ error: 'Service not found' });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Error occurred:', err);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
  console.log(`Available services: ${Object.keys(SERVICES).join(', ')}`);
});