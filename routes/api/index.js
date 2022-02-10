let router = require('express').Router();

router.use(require('./user'))
router.use(require('./post'));

module.exports = router