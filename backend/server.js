// Import required modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

dotenv.config();

const errorHandler = require('./middlewares/errorHandler');

const authRoutes = require('./routes/authRoutes');
// const userRoutes = require('./routes/userRoutes');
// const groupRoutes = require('./routes/groupRoutes');
// const chatRoutes = require('./routes/chatRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// API routes
app.use('/api/auth', authRoutes);
// app.use('/api/users', userRoutes);
// app.use('/api/groups', groupRoutes);
// app.use('/api/chats', chatRoutes);

// Error handling middleware
app.use(errorHandler);

// Set up HTTP server for Socket.io
const server = http.createServer(app);

// Set up Socket.io for real-time communication
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000', // Adjust your front-end origin as needed
    methods: ['GET', 'POST'],
  },
});

// Socket.io connection handling
io.on('connection', (socket) => {
  console.log('New client connected');

  // You can listen for various events here
  socket.on('joinGroup', (groupId) => {
    socket.join(groupId);
    console.log(`User joined group: ${groupId}`);
  });

  socket.on('sendMessage', (data) => {
    // Emit message to the specific group
    io.to(data.groupId).emit('messageReceived', data);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

// Export the server for testing or further usage
module.exports = server;

// Start the server
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
