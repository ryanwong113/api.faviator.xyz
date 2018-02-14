const { FAVIATION_NOT_FOUND } = require('../../errors');
const { isValidObjectId } = require('../../models/helpers');
const { Faviation } = require('../../models');

const tam = require('../../utils/transformAsyncMiddleware');

module.exports = tam(async ({ params: { fid } }, res, next) => {
  if (!isValidObjectId(fid)) return next(FAVIATION_NOT_FOUND);

  const faviation = await Faviation.findById(fid);

  if (!faviation) return next(FAVIATION_NOT_FOUND);

  res.json(faviation);
});
