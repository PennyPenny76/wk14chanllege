const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

router.put('/:id', withAuth, async (req, res) => {
  try {
    const post_id = req.params.id;

    const updatePost = await Post.update({
      ...req.body,
      user_id: req.session.user_id,
    },
    {
      where: {
        id: post_id,
      },
    }
  );

    res.status(200).json(updatePost);
  } catch (err) {
    res.status(400).json(err);
  }
});


module.exports = router;
