const buttonConfigService = require('../config/button-config-service.js');
const buttonUtil = require('../message-handler/button-util.js');

function initialise(output) {
  
  const buttonConfiguration = buttonConfigService.getConfig();
  buttonUtil.turnOffAll(output);
  
  for (let rowKey in buttonConfiguration) {
    let columnConfigElement = buttonConfiguration[rowKey];
    
    for (let columnKey in columnConfigElement) {
      console.log({row: rowKey, column: columnKey});
      buttonUtil.turnOn({row: parseInt(rowKey), column: parseInt(columnKey)}, output);
    }
  }
}

module.exports = {
  initialise,
};
