const { USER_NOT_FOUND_ERR } = require('../../errors');
const { isValidObjectId } = require('../../models/helpers');
const { User } = require('../../models/User');

const tam = require('../../utils/transformAsyncMiddleware');

module.exports = tam(async (req, res, next) => {
  if (!isValidObjectId(req.params.uid)) return next(USER_NOT_FOUND_ERR);

  const user = await User.findById(req.params.uid);
  res.json(user);
});
