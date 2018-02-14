const { USER_NOT_FOUND } = require('../../errors');
const { isValidObjectId } = require('../../models/helpers');
const { User } = require('../../models');

const tam = require('../../utils/transformAsyncMiddleware');

module.exports = tam(async (req, res, next) => {
  if (!isValidObjectId(req.params.uid)) return next(USER_NOT_FOUND);

  const user = await User.findById(req.params.uid);
  res.json(user);
});
