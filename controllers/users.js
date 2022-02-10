const User = require("../models/user");
class Users {
  constructor() {}

  async index(skip = 0, limit = 100) {
    return await User.find(
      {},
      {
        username: true,
        email: true,
        token: true
      }
    )
      .limit(limit)
      .skip(skip)
      .lean()
      .exec();
  }

  async create(userdata) {
    let user = new User(userdata);
    user.setPassword(userdata.password);
    return user
      .save()
      .then(() => {
        console.log("here");
        return user.toAuthJSON();
      })
      .catch((err) => {
        throw new Error(err.message);
      });
  }

  async update(id) {}

  async delete(id) {}
}

module.exports = Users;
