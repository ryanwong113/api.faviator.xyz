const controllers = require('../../controllers');
const router = require('express').Router();

router.get('/facebook', controllers.auth.facebook.login);
router.get('/facebook/callback', controllers.auth.facebook.callback);

module.exports = router;
