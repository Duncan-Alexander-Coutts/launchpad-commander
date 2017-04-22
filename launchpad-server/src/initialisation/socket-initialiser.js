const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const logger = require('../logger/logger.js');

function initialise() {
  io.on('connection', (socket) => {
    logger.info('a user connected');

    socket.on('CH01', (msg) => {
      logger.info(`message: ${msg}`);
    });

    socket.on('disconnect', () => {
      logger.info('user disconnected');
    });
  });

  http.listen(3000, () => {
    logger.info('listening on *:3000');
  });
}

function emit(commandObject) {
  io.emit(commandObject.target, commandObject.command);
}

module.exports = {
  initialise,
  emit,
};
