const randomString = (length) => Array.from({ length }).map(() => {
  return String.fromCharCode('a'.charCodeAt(0) + Math.floor(Math.random() * 27));
}).join('');

exports.createDummy = (partial_dummy = {}) => ({
  name: randomString(10),
  email: randomString(20) + '@' + randomString(10) + '.com',
  linked_accounts: {
    facebook: { id: randomString(50) },
  },
  ...partial_dummy,
});
