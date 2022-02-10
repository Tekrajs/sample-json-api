let router = require("express").Router();
let Users = require("../../controllers/users");

router.get("/users", async (req, res) => {
  try {
    let users = new Users();
    return res.status(200).json({ error: false, users: await users.index(0, 100) });
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: error.message
    });
  }
});

router.post("/registration", async function (req, res, next) {
  try {
    let { user } = req.body;
    let users = new Users();
    let response = await users.create(user);
    return res.status(200).json({
      error: false,
      message: "success",
      currentUser: response
    });
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: error.message
    });
  }
});

module.exports = router;
