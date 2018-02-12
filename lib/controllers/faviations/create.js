const faviator = require('faviator');

const { isLoggedInFilter } = require('../../middlewares/filters');
const { Faviation, Favicon } = require('../../models');

const tam = require('../../utils/transformAsyncMiddleware');

const DEFAULT_SIZE = 160;

module.exports = [
  isLoggedInFilter,
  tam(async ({ user, body: { config } }, res) => {
    const svgBuffer = await faviator.svg(config);
    config = { ...config, size: DEFAULT_SIZE };

    const faviation = await Faviation.create({
      config,
      creator_uid: user.id,
    });

    const favicon = await Favicon.create({
      faviation_id: faviation.id,
      size: config.size,
      ext: 'svg',
      data: svgBuffer,
    });

    faviation.favicons.push(favicon.id);

    await faviation.save();

    res.json(faviation);
  }),
];
