const { USER_NOT_FOUND } = require('../../errors');
const { userService } = require('../../services');

const tam = require('../../utils/transformAsyncMiddleware');

module.exports = tam(async (req, res, next) => {
  const user = await userService.findById(req.params.uid);

  if(!user) return next(USER_NOT_FOUND);

  res.json(user);
});
