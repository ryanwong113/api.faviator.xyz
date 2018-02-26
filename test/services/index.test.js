const { install } = require('../helpers/mongo');

describe.only('Services', () => {
  install();

  [
    'FaviationService',
  ].forEach(n => describe(n, require(`./${n}.spec`)));
});
