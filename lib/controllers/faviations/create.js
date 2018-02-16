const { ensureLoggedIn } = require('../../middlewares/filters');
const { faviationService } = require('../../services');

const tam = require('../../utils/transformAsyncMiddleware');

module.exports = [
  ensureLoggedIn,
  tam(async ({ user: { _id }, body: { config } }, res) => {
    res.json(await faviationService.create(_id, config));
  }),
];
