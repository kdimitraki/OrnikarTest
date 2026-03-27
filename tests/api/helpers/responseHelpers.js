function isNonEmptyArray(data) {
  return Array.isArray(data) && data.length > 0;
}

function hasKeys(obj, keys) {
  return Boolean(obj) && keys.every((key) => Object.prototype.hasOwnProperty.call(obj, key));
}

module.exports = {
  isNonEmptyArray,
  hasKeys
};
