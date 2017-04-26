function hasProperty(targetObject, propertyName) {
  if (!targetObject || !propertyName) {
    throw new Error('Both parameters are required');
  }

  return Object.prototype.hasOwnProperty.call(targetObject, propertyName);
}

module.exports = {
  hasProperty,
};
