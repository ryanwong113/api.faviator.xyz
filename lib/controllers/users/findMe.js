const { ensureLoggedIn } = require('../../middlewares/filters');

module.exports = [
  ensureLoggedIn,
  (req, res) => res.json(req.user),
];
