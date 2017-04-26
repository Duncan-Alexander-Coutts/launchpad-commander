const expect = require('expect');
const objectUtil = require('../../src/util/object-util.js');

describe('object-util.spec', () => {
  describe('hasProperty', () => {
    describe('when both parameters are undefined', () => {
      it('should throw an error', () => {
        expect(() => {
          objectUtil.hasProperty(undefined, undefined);
        }).toThrow('Both parameters are required');
      });
    });

    describe('when the object parameter is undefined', () => {
      it('should throw an error', () => {
        expect(() => {
          objectUtil.hasProperty(undefined, {});
        }).toThrow('Both parameters are required');
      });
    });

    describe('when the propertyName parameter is undefined', () => {
      it('should throw an error', () => {
        expect(() => {
          objectUtil.hasProperty({}, undefined);
        }).toThrow('Both parameters are required');
      });
    });

    describe('when the propertyName parameter is blank', () => {
      it('should throw an error', () => {
        expect(() => {
          objectUtil.hasProperty({}, '');
        }).toThrow('Both parameters are required');
      });
    });

    describe('when the given object does not have the given property name', () => {
      it('should return false', () => {
        expect(objectUtil.hasProperty({}, 'doesNotHaveProperty')).toBe(false);
      });
    });

    describe('when the given object has a property but with a different case', () => {
      it('should return true', () => {
        const mockObject = {
          MOCKPROPERTY: '',
        };
        expect(objectUtil.hasProperty(mockObject, 'mockProperty')).toBe(false);
      });
    });

    describe('when the given object has the given property name', () => {
      it('should return true', () => {
        const mockObject = {
          mockProperty: '',
        };
        expect(objectUtil.hasProperty(mockObject, 'mockProperty')).toBe(true);
      });
    });
  });
});
