const config = require('./config.json');
const objectUtil = require('../util/object-util.js');

function getConfig() {
  return config;
}

function isButtonAssigned(normalisedMessage) {
  return objectUtil.hasProperty(getConfig(), normalisedMessage.row) &&
    objectUtil.hasProperty(getConfig()[normalisedMessage.row], normalisedMessage.column);
}

module.exports = {
  getConfig,
  isButtonAssigned,
};
