/* eslint new-cap: ["error", { "newIsCapExceptions": ["input", "output"] }]*/
  const midi = require('midi');

  function getLaunchpadPortNumber(midiObject) {
    const LAUNCHPAD_INPUT_ID = 'Launchpad Mini';
    let launchPadPortNumber = -1;

    const numberOfInputs = midiObject.getPortCount();

    for (let index = 0; index < numberOfInputs; index += 1) {
      if (midiObject.getPortName(index) === LAUNCHPAD_INPUT_ID) {
        launchPadPortNumber = index;
        break;
      }
    }

    if (launchPadPortNumber < 0) {
      throw new Error('Launchpad not found - ensure it is connected');
    }

    return launchPadPortNumber;
  }

  function contructMidiIOObject(midiIOObject) {
    midiIOObject.openPort(getLaunchpadPortNumber(midiIOObject));
        // TODO Needs sorted
        // midiIOObject.ignoreTypes(false, false, false);
  }

  module.exports = {

    getLaunchpadInput() {
      const midiInput = new midi.input();

      contructMidiIOObject(midiInput);

      return midiInput;
    },

    getLaunchpadOutput() {
      const midiOutput = new midi.output();

      contructMidiIOObject(midiOutput);

      return midiOutput;
    },
  };
