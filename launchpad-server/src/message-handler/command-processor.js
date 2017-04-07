const socketInitialiser = require('../initialisation/socket-initialiser.js');

const config = {
  7: {
    0: { target: 'client', command: 'grunt watch' },
    1: { target: 'server', command: 'grails run-app' },
  },
};

function getCommandObject(message) {
  return config[message.row][message.column];
}

function handleMessage(message) {
  const commandObject = getCommandObject(message);

  console.log(`Emitting command to ${commandObject.target} with command ${commandObject.command}`);
  socketInitialiser.emit(commandObject);

  return undefined;
}


module.exports = {
  handleMessage,
};
