module.exports = {
  hasProperty(targetObject, propertyName) {
    return Object.prototype.hasOwnProperty.call(targetObject, propertyName);
  },
};
