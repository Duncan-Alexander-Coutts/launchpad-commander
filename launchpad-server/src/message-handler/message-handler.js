const messageUtil = require('./message-util.js');
const buttonUtil = require('./button-util.js');
const commandProcessor = require('./command-processor.js');
const buttonConfigService = require('../config/button-config-service');
const colours = buttonUtil.Colours;

function handleMessage(message, output) {
  const normalisedMessage = messageUtil.getNormalisedMessage(message);
  
  if (buttonConfigService.isButtonAssigned(normalisedMessage)) {
    if (normalisedMessage.velocity > 0) {
      buttonUtil.turnOn(normalisedMessage, output, colours.GREEN);
      commandProcessor.handleMessage(normalisedMessage);
    } else {
      buttonUtil.turnOn(normalisedMessage, output, colours.GREEN_LOW);
    }
  }
}

module.exports = {
  handleMessage,
};