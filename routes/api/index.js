let router = require('express').Router();

router.use(require('./login'))
router.use(require('./post'));
router.use(require('./user'))

module.exports = router