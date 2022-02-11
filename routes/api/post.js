let router = require("express").Router();
let auth = require("../middlewares/auth");
let Posts = require("../../controllers/posts");

router.get("/posts", auth.required, async (req, res, next) => {
  try {
    const posts = new Posts();
    return res.status(200).json({
      error: false,
      posts: await posts.index()
    });
  } catch (err) {
    return res.status(200).json({
      error: true,
      message: err.message
    });
  }
});

router.get("/posts/:id", auth.required, async (req, res, next) => {
  try {
    let { id } = req.params;
    const posts = new Posts();
    return res.status(200).json({
      error: false,
      post: await posts.show(id)
    });
  } catch (err) {
    return res.status(200).json({
      error: true,
      message: err.message
    });
  }
});

module.exports = router;
