const { FAVIATION_NOT_FOUND, FAVICON_NOT_FOUND } = require('../../errors');
const { isValidObjectId } = require('../../models/helpers');
const { Faviation, Favicon } = require('../../models');

const tam = require('../../utils/transformAsyncMiddleware');

module.exports = tam(async ({ params: { faviation_id, favicon_id } }, res, next) => {
  if (!isValidObjectId(faviation_id)) return next(FAVIATION_NOT_FOUND);
  if (!isValidObjectId(favicon_id)) return next(FAVICON_NOT_FOUND);

  const faviation = await Faviation.findOne({
    _id: faviation_id,
    favicons: favicon_id,
  });
  if (!faviation) return next(FAVIATION_NOT_FOUND);

  const favicon = await Favicon.findById(favicon_id);

  const format = favicon.format === 'svg'? 'svg+xml': favicon.format;
  res.set('Content-Type', `image/${format}`);
  res.send(favicon.data);
});
