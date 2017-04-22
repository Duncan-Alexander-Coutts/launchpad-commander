const config = require('./config.json');

function getConfig() {
  return config;
}

function isButtonAssigned(normalisedMessage) {
  const config = getConfig();
  
  return config.hasOwnProperty(normalisedMessage.row) &&
    config[normalisedMessage.row].hasOwnProperty(normalisedMessage.column);
}

module.exports = {
  getConfig,
  isButtonAssigned
};
