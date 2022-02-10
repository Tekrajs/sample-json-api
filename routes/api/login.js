let router = require("express").Router();
let Login = require("../../controllers/login");

router.post("/users/login", async (req, res, next) => {
  try {
    let login = new Login();
    let userdata = await login.authenticate(req, res, next);
    if (userdata?.errors) {
      return res.status(422).json({
        error: true,
        errors: { ...userdata.errors }
      });
    }
    return res.status(200).json({ error: false, user: userdata });
  } catch (err) {
    return res.status(500).json({
      error: true,
      message: err.message
    });
  }
});

module.exports = router;
