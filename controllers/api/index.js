const router = require('express').Router();
const userRoutes = require('./userRoutes');
const newPostRoutes = require('./newPostRoutes');
const editPostRoutes = require('./editPostRoutes');
const newCommentRoutes = require('./newCommentRoutes');
const dashboardRoutes = require('./dashboardRoutes');

router.use('/users', userRoutes);
router.use('/newpost', newPostRoutes);
router.use('/editpost', editPostRoutes);
router.use('/newcomment', newCommentRoutes);
router.use('/dashboard', dashboardRoutes);

module.exports = router;
