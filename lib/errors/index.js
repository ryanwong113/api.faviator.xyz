const errs = [
  {
    code: 404,
    type: 'FAVICON_NOT_FOUND_ERR',
    message: 'Faviation not found.',
  },
  {
    code: 404,
    type: 'FAVIATION_NOT_FOUND_ERR',
    message: 'Favicon not found.',
  },
  {
    code: 404,
    type: 'USER_NOT_FOUND_ERR',
    message: 'User not found.',
  },
  {
    code: 401,
    type: 'NOT_LOGGED_IN_ERR',
    message: 'Login required.',
  },
];

module.exports = Object.assign({}, ...errs.map(err => ({ [err.type]: err })));
