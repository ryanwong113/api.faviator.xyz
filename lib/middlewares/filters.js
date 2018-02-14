const { SUPPORTED_FORMATS } = require('../models/Favicon');
const {
  NOT_LOGGED_IN_ERR,
  UNSUPPORTED_FORMAT,
  SIZE_INVALID_RANGE,
} = require('../errors');

exports.ensureLoggedIn = ({ user }, res, next) => {
  if (!user) return next(NOT_LOGGED_IN_ERR);
  return next();
};

exports.ensureFormatSupported = ({ body: { format } }, res, next) => {
  if (!SUPPORTED_FORMATS.includes(format)) return next(UNSUPPORTED_FORMAT);
  return next();
};

exports.ensureSizeInRange = ({ body: { size } }, res, next) => {
  const MIN_SIZE = 8;
  const MAX_SIZE = 1024;

  size = Number(size);
  if (!size) return next(SIZE_INVALID_RANGE);
  if (MIN_SIZE <= size && size <= MAX_SIZE) return next();
  return next(SIZE_INVALID_RANGE);
};
