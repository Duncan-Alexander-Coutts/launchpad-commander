const dataTypeHelper = require('../util/data-type-helper/data-type-helper.js');

function getRowNumber(unNormalisedMessage) {
  return Math.floor(unNormalisedMessage[1] / 16);
}

function getColumnNumber(unNormalisedMessage) {
  return unNormalisedMessage[1] % 8;
}

module.exports = {
  getNormalisedMessage(unNormalisedMessage) {
    if (!unNormalisedMessage) {
      return null;
    } else if (unNormalisedMessage.length !== 3) {
      throw new Error('parameter must be an array of length 3');
    } else if (!dataTypeHelper.isNumeric(unNormalisedMessage[1])) {
      throw new Error("input array's 2nd element must be numeric");
    }

    return {
      row: getRowNumber(unNormalisedMessage),
      column: getColumnNumber(unNormalisedMessage),
      velocity: unNormalisedMessage[2],
    };
  },
};
