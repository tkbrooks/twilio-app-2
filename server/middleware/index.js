const router = require('express').Router();

router.use(require('./logging'));
router.use(require('./body-parsing'));
// router.use(require('./session'));
router.use(require('./static'));

module.exports = router;
