const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const { content, post_id } = req.body;

    if (!post_id || !content) {
      res.status(400).json({ message: 'Post ID and content are required' });
      return;
    }

    const newComment = await Comment.create({
      content,
      user_id: req.session.user_id,
      post_id,
    });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});


module.exports = router;
