let router = require("express").Router();

router.get('/login', async (req,res) => {

})

router.get("/users", async (req, res) => {
  return res.status(200).json({
    message: "success",
    users: [{ name: "test" }, { name: "test" }]
  });
});

module.exports = router;