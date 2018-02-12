const { isLoggedInFilter } = require('../../middlewares/filters');

module.exports = [
  isLoggedInFilter,
  (req, res) => res.json(req.user),
];
