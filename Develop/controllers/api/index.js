const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');
const postRoute = require('./postRoute');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
router.use('/posts', postRoute);

module.exports = router;
