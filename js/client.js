const socket = io('http://localhost:8081', { transports: ['websocket'] });

const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageInput');
const messageContainer = document.querySelector(".container");
const fileInput = document.getElementById("fileInput");

const append = (message, position, isFile = false) => {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', position);

    if (isFile) {
        const fileLink = document.createElement('a');
        fileLink.href = message.url;
        fileLink.download = message.name;
        fileLink.innerText = `${message.name}`;
        fileLink.target = "_blank";
        messageElement.innerHTML = `<strong>${message.name}</strong><br>`;
        messageElement.appendChild(fileLink);
    } else {
        messageElement.innerText = message;
    }

    messageContainer.append(messageElement);
};

// Username prompt
const name = prompt("Enter Your Name");
append(`You Joined the chat`, 'center');
socket.emit('new-user-joined', name);

// New user joined
socket.on('user-joined', name => {
    append(`${name} joined the chat`, 'center');
});

// Sending text message
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = messageInput.value;
    append(message, 'right');
    socket.emit('send', message);
    messageInput.value = '';
});

// Receiving message
socket.on('receive', data => {
    append(`${data.name}: ${data.message}`, 'left');
});

// User left
socket.on('left', name => {
    append(`${name} left the chat`, 'center');
});

// File input listener
fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            const base64Data = reader.result.split(',')[1];
            socket.emit('file-upload', {
                name: file.name,
                type: file.type,
                data: base64Data,
                username: name
            });
            append({ name: file.name, url: reader.result }, 'right', true);
        };
        reader.readAsDataURL(file);
    }
});

// Receiving files
socket.on('file-share', (file) => {
    const blob = new Blob([Uint8Array.from(atob(file.data), c => c.charCodeAt(0))], { type: file.type });
    const url = URL.createObjectURL(blob);
    append({ name: file.name, url: url }, 'left', true);
});
