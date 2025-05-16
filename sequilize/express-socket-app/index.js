const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Routes
const pageRoutes = require('./routes/pageRoutes');
app.use('/', pageRoutes);

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Socket logic
const socketController = require('./controllers/socketController');
socketController(io);

// Start server
server.listen(3000, () => {
  console.log(' Server running at http://localhost:3000');
});
