const buttonConfigService = require('../config/button-config-service.js');
const buttonUtil = require('../message-handler/button-util.js');

const colours = buttonUtil.Colours;

function initialise(output) {
  const buttonConfiguration = buttonConfigService.getConfig();
  buttonUtil.turnOffAll(output);

  Object.keys(buttonConfiguration).forEach((rowKey) => {
    const columnConfigElement = buttonConfiguration[rowKey];

    Object.keys(columnConfigElement).forEach((columnKey) => {
      buttonUtil.turnOn({ row: parseInt(rowKey, 10), column: parseInt(columnKey, 10) },
        output,
        colours.GREEN_LOW);
    });
  });
}

module.exports = {
  initialise,
};
