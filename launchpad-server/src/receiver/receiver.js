const midiProvider = require('../midi-provider/midi-provider.js');
const messageHandler = require('../message-handler/message-handler.js');
const socketInitialiser = require('../initialisation/socket-initialiser.js');
const buttonInitialiser = require('../initialisation/button-initialiser.js');

function start() {
  const input = midiProvider.getLaunchpadInput();
  const output = midiProvider.getLaunchpadOutput();

  socketInitialiser.initialise();
  buttonInitialiser.initialise(output);

  input.on('message', (deltaTime, message) => {
    messageHandler.handleMessage(deltaTime, message, output);
  });
}

module.exports = {
  start,
};
