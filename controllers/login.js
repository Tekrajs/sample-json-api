require('../config/passport');
let User = require("../models/user"),
  passport = require("passport");

class Login {
  constructor() {}

  async authenticate(req, res, next) {
    return new Promise((resolve, reject) => {
      passport.authenticate("apiStrategy", { session: false }, function (err, user, info) {
        if (err) reject(err);
        if (info) resolve(info);
        if (user) {
          user.token = user.generateToken();
          resolve(user.toAuthJSON());
        }
        resolve(null);
      })(req, res, next);
    });
  }
}

module.exports = Login;
