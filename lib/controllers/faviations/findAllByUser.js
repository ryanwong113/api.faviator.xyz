const { USER_NOT_FOUND } = require('../../errors');
const { faviationService, userService } = require('../../services');

const tam = require('../../utils/transformAsyncMiddleware');

module.exports = tam(async ({ params: { uid } }, res, next) => {
  if (!(await userService.findById(uid))) return next(USER_NOT_FOUND);
  const faviations = await faviationService.findAllByUser(uid);

  res.json(faviations);
});
