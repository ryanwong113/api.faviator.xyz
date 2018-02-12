const controllers = require('../controllers');
const router = require('express').Router();

router.post('/', controllers.faviations.create);

router.get('/:fid', controllers.faviations.findOne);

module.exports = router;
