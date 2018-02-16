const { FAVIATION_NOT_FOUND } = require('../../errors');
const { faviationService } = require('../../services');

const tam = require('../../utils/transformAsyncMiddleware');

module.exports = tam(async ({ params: { fid } }, res, next) => {
  const faviation = await faviationService.findById(fid);

  if (!faviation) return next(FAVIATION_NOT_FOUND);

  res.json(faviation);
});
