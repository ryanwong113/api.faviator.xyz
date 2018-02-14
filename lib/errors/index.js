const errs = [
  // General
  {
    code: 401,
    type: 'NOT_LOGGED_IN',
    message: 'Login required.',
  },
  {
    code: 403,
    type: 'UNAUTHORISED',
    message: 'Please make sure you have proper rights to perform the action.',
  },
  // GET /faviations/:fid
  {
    code: 404,
    type: 'FAVIATION_NOT_FOUND',
    message: 'Faviation not found.',
  },
  // GET /faviations/:faviation_id/favicons/:favicon_id
  {
    code: 404,
    type: 'FAVICON_NOT_FOUND',
    message: 'Favicon not found.',
  },
  // GET /users/:uid
  {
    code: 404,
    type: 'USER_NOT_FOUND',
    message: 'User not found.',
  },
  // POST /faviations/:fid
  {
    code: 400,
    type: 'UNSUPPORTED_FORMAT',
    message: 'Faviator currently only support SVG/PNG/JPG formats.',
  },
  {
    code: 400,
    type: 'SIZE_INVALID_RANGE',
    message: 'Faviator only generate icons with size within 8 - 1024.',
  },
];

module.exports = Object.assign({}, ...errs.map(err => ({ [err.type]: err })));
