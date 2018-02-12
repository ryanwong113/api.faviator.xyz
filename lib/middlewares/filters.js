const tam = require('../utils/transformAsyncMiddleware');
const { NOT_LOGGED_IN_ERR } = require('../errors');

exports.isLoggedInFilter = tam(async (req, res, next) => {
  if (!req.user) next(NOT_LOGGED_IN_ERR);
  next();
});
