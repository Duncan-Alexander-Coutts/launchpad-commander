const Velocity = {
  FULL: 100,
  MIN: 0,
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

function turnOn(message, output) {
  sendMessage(output, MessageStatus.ON, message.row, message.column, Velocity.FULL);
}

function turnOff(message, output) {
  sendMessage(output, MessageStatus.ON, message.row, message.column, Velocity.MIN);
}

function turnOffAll(output) {
  for (let rowIndex = 0; rowIndex < 8; rowIndex++) {
    for (let columnIndex = 0; columnIndex < 8; columnIndex++) {
      turnOff({row: rowIndex, column: columnIndex}, output);
    }
  }
}

module.exports = {
  turnOn,
  turnOff,
  turnOffAll
};
