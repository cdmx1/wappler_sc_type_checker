exports.isNumber = function isNumber(input) {
  return !isNaN(parseFloat(input)) && isFinite(input);
};

exports.isUUID = function isUUID(input) {
  const uuidRegex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
  return uuidRegex.test(input);
};

exports.isBool = function isBool(input) {
  return typeof input === 'boolean';
};

exports.isString = function isString(input) {
  return typeof input === 'string';
};

exports.isArray = function isArray(input) {
  return Array.isArray(input);
};

exports.isObject = function isObject(input) {
  return typeof input === 'object' && !Array.isArray(input) && input !== null;
};

exports.isFunction = function isFunction(input) {
  return typeof input === 'function';
};

exports.isNull = function isNull(input) {
  return input === null;
};

exports.isUndefined = function isUndefined(input) {
  return typeof input === 'undefined';
};

exports.isDate = function isDate(input) {
  return input instanceof Date;
};

exports.isRegExp = function isRegExp(input) {
  return input instanceof RegExp;
};

exports.isNaN = function isNaN(input) {
  return Number.isNaN(input);
};

