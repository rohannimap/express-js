module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log(' New user connected:', socket.id);

    socket.on('chatMessage', (msg) => {
      console.log(' Message:', msg);
      io.emit('chatMessage', msg); 
    });

    socket.on('disconnect', () => {
      console.log(' User disconnected:', socket.id);
    });
  });
};
