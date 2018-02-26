const { install } = require('../../helpers/mongo');

describe('faviations', () => {
  install();
  it(() => {});

  [
  ].forEach(n => describe(n, require(`./${n}.spec`)));
});
