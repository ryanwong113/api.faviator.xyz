const pickKeys = require('lodash.pick');
const {
  ensureLoggedIn,
  ensureFormatSupported,
  ensureSizeInRange,
} = require('../../middlewares/filters');
const { faviationService } = require('../../services');
const { UNAUTHORISED, FAVIATION_NOT_FOUND } = require('../../errors');

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
    const faviation = await faviationService.findById(fid);
    if (!faviation) return next(FAVIATION_NOT_FOUND);
    if (!user._id.equals(faviation.creator_uid)) return next(UNAUTHORISED);

    const favicon = await faviationService.faviate(faviation._id, format, size)

    res.json(favicon);
  }),
];
