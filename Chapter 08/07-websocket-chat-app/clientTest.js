// Prompt:
// Write a simple browser-based WebSocket client in JavaScript for a real-time chat app. 
// It should connect to a WebSocket server, send messages and typing indicators, 
// and handle incoming messages of types: welcome, message, typing, disconnection.

const ws = new WebSocket('ws://localhost:8080');

ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    const chat = document.getElementById('chat');
    const messageElement = document.createElement('div');

    switch (data.type) {
        case 'welcome':
            messageElement.textContent = `Server: ${data.message}`;
            break;
        case 'message':
            messageElement.textContent = `Client ${data.clientId}: ${data.text} (${data.timestamp})`;
            break;
        case 'typing':
            messageElement.textContent = `Client ${data.clientId} is typing...`;
            break;
        case 'disconnection':
            messageElement.textContent = `Client ${data.clientId} disconnected.`;
            break;
        default:
            messageElement.textContent = `Unknown message type: ${data.type}`;
    }

    chat.appendChild(messageElement);
};

function sendMessage() {
    const input = document.getElementById('messageInput');
    const message = input.value;
    ws.send(JSON.stringify({ type: 'message', text: message }));
    input.value = '';
}

function startTyping() {
    ws.send(JSON.stringify({ type: 'typing' }));
}

function stopTyping() {
    // Optionally send a stop typing message if needed
}
