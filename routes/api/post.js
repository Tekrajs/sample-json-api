let router = require("express").Router();

router.get("/posts", async (req, res, next) => {
  return res.json({
    status: "success",
    posts: [{ title: "test" }, { title: "test" }]
  });
});

module.exports = router;
