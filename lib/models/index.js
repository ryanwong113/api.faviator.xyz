[
  'Faviation',
  'Favicon',
  'User',
].forEach(n => exports[n] = require(`./${n}`).model);
