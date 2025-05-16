// GitHub Copilot Prompt:
// Build a basic WebSocket chat server using Node.js and the 'ws' library.
// Allow multiple clients to connect and broadcast messages to all.

const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });

let clients = [];

server.on('connection', (ws) => {
    console.log('New client connected');
    clients.push(ws);

    ws.on('message', (message) => {
        console.log(`Received: ${message}`);
        clients.forEach((client) => {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(`Client says: ${message}`);
            }
        });
    });

    ws.on('close', () => {
        console.log('Client disconnected');
        clients = clients.filter(client => client !== ws);
    });

    ws.on('error', (err) => {
        console.error('WebSocket error:', err);
    });
});

console.log('WebSocket server running on ws://localhost:8080');
