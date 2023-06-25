const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoute = require('./postRoute');

router.use('/users', userRoutes);
router.use('/posts', postRoute);

module.exports = router;
