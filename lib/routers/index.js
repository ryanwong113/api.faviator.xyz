const router = require('express').Router();

router.use('/auth', require('./auth'));
router.use('/users', require('./users'));
router.all('/', (req, res) => res.end(JSON.stringify(req.user)));

module.exports = router;
