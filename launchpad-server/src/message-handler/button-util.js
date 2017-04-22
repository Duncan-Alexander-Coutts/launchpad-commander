const Colours = {
  RED: 15,
  AMBER: 63,
  GREEN: 60,
  GREEN_LOW: 28,
  YELLOW: 62,
  OFF: 0,
};

const MessageStatus = {
  ON: 144,
};

function calculateMidiNoteNumber(row, column) {
  return (row * 16) + column;
}

function sendMessage(output, status, row, column, velocity) {
  const midiNoteNumber = calculateMidiNoteNumber(row, column);
  output.sendMessage([status, midiNoteNumber, velocity]);
}

function turnOn(message, output, colour) {
  sendMessage(output, MessageStatus.ON, message.row, message.column, colour);
}

function turnOff(message, output) {
  sendMessage(output, MessageStatus.ON, message.row, message.column, Colours.OFF);
}

function turnOffAll(output) {
  for (let rowIndex = 0; rowIndex < 8; rowIndex += 1) {
    for (let columnIndex = 0; columnIndex < 8; columnIndex += 1) {
      turnOff({ row: rowIndex, column: columnIndex }, output);
    }
  }
}

module.exports = {
  Colours,
  turnOn,
  turnOff,
  turnOffAll,
};
