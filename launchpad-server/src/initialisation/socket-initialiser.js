const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

function initialise() {
  io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('CH01', (msg) => {
      console.log(`message: ${msg}`);
    });

    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });

  http.listen(3000, () => {
    console.log('listening on *:3000');
  });
}

function emit(commandObject) {
  console.log(commandObject);
  io.emit(commandObject.target, commandObject.command);
}

module.exports = {
  initialise,
  emit,
};
