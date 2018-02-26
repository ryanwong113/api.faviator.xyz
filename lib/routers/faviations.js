const controllers = require('../controllers');
const router = require('express').Router();

router.get('/byUser/:uid', controllers.faviations.findAllByUser);
router.get('/:faviation_id/favicons/:favicon_id', controllers.faviations.findFavicon);
router.get('/:fid', controllers.faviations.findOne);

router.post('/:fid', controllers.faviations.createFavicon);
router.post('/', controllers.faviations.create);

module.exports = router;
