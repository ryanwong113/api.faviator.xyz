const controllers = require('../controllers');
const router = require('express').Router();

// router.get('/:uid', controllers.users.findOne);

router.get('/me', controllers.users.findMe);

module.exports = router;
