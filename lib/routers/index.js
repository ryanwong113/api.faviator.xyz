const config = require('../../config');
const router = require('express').Router();

router.use('/auth', require('./auth'));

router.use('/users', require('./users'));

router.use('/faviations', require('./faviations'));

router.all('/', (req, res) => res.redirect(config.APP_HOST));
router.get('/robots.txt', (req, res) => res.end('UserAgent: *\nDisallow: /\n'));

module.exports = router;
