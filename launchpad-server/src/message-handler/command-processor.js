const socketInitialiser = require('../initialisation/socket-initialiser.js');
const configService = require('../config/button-config-service.js');


function getCommandObject(message) {
  const config = configService.getConfig();
  
  if (config[message.row] && config[message.row][message.column]) {
    return config[message.row][message.column];
  }
  return undefined;
}

function handleMessage(message) {
  const commandObject = getCommandObject(message);
  
  if (!commandObject) return;
  
  console.log(`Emitting command to ${commandObject.target} with command ${commandObject.command}`);
  socketInitialiser.emit(commandObject);
}

module.exports = {
  handleMessage,
};
