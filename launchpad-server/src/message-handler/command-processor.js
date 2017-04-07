const socketInitialiser = require('../initialisation/socket-initialiser.js');

const config = {
  5: {
    0: { target: 'dataset', command: './matters/import.sh' },
  },
  6: {
    0: { target: 'server', command: 'grails run-app' },
    1: { target: 'server', command: 'grails run-war' },
  },
  7: {
    0: { target: 'client', command: 'grunt watch' },
    1: { target: 'client', command: 'grunt build' },
    2: { target: 'client', command: 'grunt eslint' },
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
