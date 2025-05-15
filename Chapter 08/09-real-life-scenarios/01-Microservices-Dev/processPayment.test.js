// Prompt:
// Generate Jest test cases for the /process-payment endpoint, including edge cases for missing fields and successful payment.

const request = require('supertest');
const app = require('./app');

test('should return 400 for missing fields', async () => {
    const response = await request(app).post('/process-payment').send({});
    expect(response.status).toBe(400);
});

test('should process payment successfully', async () => {
    const response = await request(app).post('/process-payment').send({ cardNumber: '1234', amount: 100 });
    expect(response.status).toBe(200);
});
