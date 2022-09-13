
const server = new WebSocket(`ws://localhost:5555/websocket`);

const message = document.getElementById('messages');
const input = document.getElementById('message');
const button = document.getElementById('send')

button.disabled = true;

server.onopen = () => {
    button.disabled = false;
}
const sendMessage = () => {
    server.send(input.value);
    handleMessage(input.value, 'client')
}

button.addEventListener('click',sendMessage,false);


server.onmessage = (data) => {
    handleMessage(data.data.toString(), 'server')
}

const handleMessage = (msg, type) => {
    const messages = document.createElement('div');
    messages.innerText = `${type} says: ${msg}`
    message.appendChild(messages);
}