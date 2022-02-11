let router = require("express").Router();
let auth = require("../middlewares/auth");

router.get("/posts", auth.required, async (req, res, next) => {
  return res.json({
    status: "success",
    posts: [{ title: "test" }, { title: "test" }]
  });
});

module.exports = router;
