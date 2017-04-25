const expect = require('expect');
const objectUtil = require('../../src/util/object-util.js');

describe('object-util.spec', () => {
  it('test', () => {
    expect(objectUtil.hasProperty).toBeA(Function);
  });
});
