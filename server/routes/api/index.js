const router = require('express').Router();

router.use('/conversations', require('./conversations'));
router.use('/messages', require('./messages'));

router.use((req, res, next) => {
  const error = new Error('API route not found');
  error.status = 404;
  next(error);
});

module.exports = router;
