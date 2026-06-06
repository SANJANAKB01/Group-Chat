# 💬 Group Chat Application

### Real-Time Group Chat Application (Node.js + Socket.IO + HTML + CSS + JavaScript)

Group Chat Application is a real-time messaging platform that enables multiple users to communicate instantly through a shared chat room. Built using Node.js and Socket.IO, the application provides seamless bidirectional communication between connected clients. Users can join the chat using a username, send messages, and receive real-time updates when participants join or leave the conversation.

The project demonstrates the implementation of WebSocket-based communication and event-driven programming for building scalable real-time applications.


# 🚀 Features

* 💬 Real-time group messaging
* ⚡ Instant message delivery using Socket.IO
* 👥 Multiple users can join simultaneously
* 🔔 Join and leave notifications
* 🌐 WebSocket-based communication
* 📱 Simple and responsive user interface
* 🔄 Real-time synchronization across all connected clients
* 🚀 Lightweight and easy to deploy


# 🛠️ Tech Stack

| Layer                   | Tools Used              |
| ----------------------- | ----------------------- |
| Frontend                | HTML5, CSS3, JavaScript |
| Backend                 | Node.js                 |
| Real-Time Communication | Socket.IO               |
| Networking              | WebSockets              |
| Development Environment | VS Code                 |


# 📂 Project Structure

```bash
Group-chat-Application/
│
├── CSS/
│   └── style.css
│
├── js/
│   └── client.js
│
├── Server/
│   ├── index.js
│   ├── package.json
│   └── node_modules/
│
├── index.html
│
└── README.md
```


# ⚙️ How It Works

1. User enters a username when opening the application.
2. The client establishes a connection with the Socket.IO server.
3. When a new user joins:

   * The server broadcasts a join notification to all connected users.
4. When a user sends a message:

   * The server receives the message.
   * The message is broadcast to all other connected clients.
5. When a user disconnects:

   * The server notifies all remaining users.


# 🔌 Socket Events

| Event           | Description                          |
| --------------- | ------------------------------------ |
| new-user-joined | Triggered when a user joins the chat |
| user-joined     | Broadcasts join notification         |
| send            | Sends a message to the server        |
| receive         | Receives messages from other users   |
| left            | Broadcasts when a user leaves        |
| disconnect      | Handles user disconnection           |


# 📦 Installation & Setup

## Prerequisites

* Node.js installed on your system
* npm (Node Package Manager)

## Clone Repository

```bash
git clone <repository-url>
cd Group-chat-Application
```

## Install Dependencies

Navigate to the Server folder:

```bash
cd Server
npm install
```

## Start the Server

```bash
node index.js
```

Server will start at:

```bash
http://localhost:8081
```

## Run the Application

Open `index.html` in your browser.

For testing multiple users:

* Open multiple browser tabs
* Or open different browsers
* Enter different usernames

Start chatting in real time.


# 📸 Screenshots

## Chat Interface

Add your screenshot here:

```md
![Chat Interface](screenshots/chat-interface.png)
```

## Multiple Users Chatting

Add your screenshot here:

```md
![Group Chat](screenshots/group-chat.png)
```


# 🎯 Learning Outcomes

This project demonstrates:

* Real-time web application development
* WebSocket communication
* Event-driven programming
* Client-server architecture
* Socket.IO implementation
* Node.js backend development


# 🔮 Future Enhancements

* 🔐 User Authentication
* 👤 User Profiles
* 💾 Chat History Storage
* 😊 Emoji Support
* 📎 File Sharing
* 🔔 Private Messaging
* 📱 Mobile Responsive Design
* 🌙 Dark Mode
* 🟢 Online/Offline Status Indicators


# 🎥 Demo Video

Add your demo video link here:

```text
https://your-demo-video-link
```


# 🔗 GitHub Repository

Add your repository link here:

```text
https://github.com/your-username/Group-chat-Application
```


# 🤝 Contributing

Contributions are welcome!

Feel free to fork the repository, improve existing features, fix bugs, or add new functionalities. Create a pull request describing your changes and enhancements.


# 📜 License

This project is developed for educational and learning purposes. Feel free to use and modify it for personal or academic projects.
  
