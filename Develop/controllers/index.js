const router = require('express').Router();
const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;