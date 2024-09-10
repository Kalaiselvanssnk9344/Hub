const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Serve static files from the "public" directory
app.use(express.static('public'));

// Developer chat page
app.get('/developer', (req, res) => {
    res.sendFile(__MAVENHUB + '/public/developer.html');
});

// Client chat page
app.get('/client', (req, res) => {
    res.sendFile(__MAVENHUB + '/public/client.html');
});

// Socket.IO connection handling
io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

const PORT = process.env.PORT || 5001;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});