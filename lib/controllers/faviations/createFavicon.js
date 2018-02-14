const faviator = require('faviator');

const {
  ensureLoggedIn,
  ensureFormatSupported,
  ensureSizeInRange,
} = require('../../middlewares/filters');
const { Faviation, Favicon } = require('../../models');
const { UNAUTHORISED } = require('../../errors');

const tam = require('../../utils/transformAsyncMiddleware');

module.exports = [
  ensureLoggedIn,
  ensureFormatSupported,
  ensureSizeInRange,
  tam(async ({
    user,
    params: { fid },
    body: { size, format },
  }, res, next) => {
    const faviation = await Faviation.findById(fid);
    if (user.id !== String(faviation.creator_uid)) return next(UNAUTHORISED);

    const buffer = await faviator[format]({ ...faviation.config, size });

    const favicon = await Favicon.create({
      faviation_id: faviation.id,
      size,
      format,
      data: buffer,
    });

    faviation.favicons.push(favicon.id);

    await faviation.save();

    res.json({
      id: favicon.id,
      size: favicon.size,
      format: favicon.format,
      faviation_id: faviation.id,
    });
  }),
];
