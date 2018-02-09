const controllers = require('./controllers');
const router = require('express').Router();

router.post('/facebook', controllers.facebook.login);
router.get('/facebook/callback', controllers.facebook.callback);

module.exports = router;
