const { install } = require('../../helpers/mongo');

describe('faviations', () => {
  install();

  [
    'create',
    'createFavicon',
    'findFavicon',
    'findOne',
  ].forEach(n => describe(n, require(`./${n}.spec`)));
});
