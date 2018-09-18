const { db } = require('./db');
const app = require('./app');
const socketio = require('socket.io');
const PORT = process.env.PORT || 8080;

if (process.env.NODE_ENV !== 'production') {
  try {
    require('./secrets');
  } catch (err) {
    console.log('Secrets file not found!');
  }
}

const startServer = () => {
  db.sync().then(() => {
    console.log('Database synced!');

    const server = app.listen(PORT, () => {
      console.log(`Listening on http://localhost:${PORT}`);
    });

    const io = socketio(server);
    require('./middleware/socket')(io);
    app.io = io;
  });
};

startServer();
