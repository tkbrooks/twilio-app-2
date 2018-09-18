const socketio = io => {
  io.on('connect', socket => {
    console.log(
      `A socket connection to the server has been made: ${socket.id}`
    );

    socket.on('disconnect', () => {
      console.log(`Connection ${socket.id} has left the building`);
    });

    // Only allow one connection
    const connectedClients = Object.keys(io.sockets.connected).length;
    if (connectedClients > 1) {
      socket.emit('forceDisconnect');
      socket.disconnect();
    }
  });
};

module.exports = socketio;
