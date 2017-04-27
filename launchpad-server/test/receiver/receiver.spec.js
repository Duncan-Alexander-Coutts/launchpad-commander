const expect = require('expect');
const mockery = require('mockery');

let receiver;

describe('receiver.spec', () => {
  const mocks = {
    midiProvider: {
      getLaunchpadInput: expect.createSpy(),
      getLaunchpadOutput: expect.createSpy(),
    },
    messageHandler: {
      handleMessage: expect.createSpy(),
    },
    socketInitialiser: {
      initialise: expect.createSpy(),
    },
    buttonInitialiser: {
      initialise: expect.createSpy(),
    },
  };

  before(() => {
    mockery.enable();
    mockery.registerMock('../midi-provider/midi-provider.js', mocks.midiProvider);
    mockery.registerMock('../message-handler/message-handler.js', mocks.messageHandler);
    mockery.registerMock('../initialisation/socket-initialiser.js', mocks.socketInitialiser);
    mockery.registerMock('../initialisation/button-initialiser.js', mocks.buttonInitialiser);
    mockery.registerAllowable('../../src/receiver/receiver.js');

    receiver = require('../../src/receiver/receiver.js');
  });

  after(() => {
    mockery.disable();
  });

  describe('start', () => {
    const mockInput = {
      on: () => {
      },
    };

    beforeEach(() => {
      mocks.midiProvider.getLaunchpadInput.andReturn(mockInput);

      receiver.start();
    });

    it('should call midiProvider.geLaunchpadInput', () => {
      expect(mocks.midiProvider.getLaunchpadInput).toHaveBeenCalled();
    });

    it('should call midiProvider.getLaunchpadOutput', () => {
      expect(mocks.midiProvider.getLaunchpadOutput).toHaveBeenCalled();
    });
  });
});
