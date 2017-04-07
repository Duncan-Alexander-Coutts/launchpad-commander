const messageUtil = require('./message-util.js');
const buttonUtil = require('./button-util.js');
const commandProcessor = require('./command-processor.js');

function handleMessage(deltaTime, message, output) {
  const normalisedMessage = messageUtil.getNormalisedMessage(message);

  if (normalisedMessage.velocity > 0) {
    buttonUtil.turnOn(normalisedMessage, output);
    //do something here to send the socket message
    commandProcessor.handleMessage(normalisedMessage);

  } else {
    buttonUtil.turnOff(normalisedMessage, output);
  }
}

module.exports = {
  handleMessage,
};