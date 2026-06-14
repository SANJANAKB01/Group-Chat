const http = require("http");
const { Server } = require("socket.io");

// Create HTTP server
const server = http.createServer();

// Create Socket.IO server with CORS enabled
const io = new Server(server, {
    cors: {
        origin: "*", // Allow all origins for development
        methods: ["GET", "POST"]
    }
});

// Store connected users
const users = {};

io.on('connection', socket => {
    socket.on('new-user-joined', name => {
        console.log("New user:", name);
        users[socket.id] = name;
        socket.broadcast.emit('user-joined', name);
    });

    socket.on('send', message => {
        socket.broadcast.emit('receive', {
            message: message,
            name: users[socket.id]
        });
    });

    // ✅ Handle file upload
    socket.on('file-upload', file => {
        // Broadcast file data to all other users
        socket.broadcast.emit('file-share', {
            name: file.name,
            type: file.type,
            data: file.data,
            username: users[socket.id]
        });
    });

    socket.on('disconnect', () => {
        socket.broadcast.emit('left', users[socket.id]);
        delete users[socket.id];
    });
});

// Start the server on port 8081
server.listen(8081, () => {
    console.log("Server is running on http://localhost:8081");
});

// This server uses Socket.IO to handle real-time communication between clients.
// It listens for new connections, handles user joining and leaving events,
// and broadcasts messages to all connected clients.
// The server is set up to allow cross-origin requests, which is useful for development.
// In a production environment, you should restrict the allowed origins for security reasons.
// The server listens on port 8081, and you can change this to any other port if needed.
// To run this server, make sure you have the required dependencies installed:
// npm install socket.io
// Then, you can start the server using Node.js:
// node index.js
// You can test the server by opening multiple browser windows and connecting to the same server.
// Each window will represent a different user, and you can send messages between them.
// This is a simple chat application using Socket.IO.
// You can extend this application by adding features like:
// - User authentication
// - Message history