const router = require('express').Router();

// Users routes
router.use(require('./user'));
// Comments routes
router.use(require('./comment'));

module.exports = router;