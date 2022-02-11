const User = require("../models/user");
class Users {
  constructor() {}

  /**
   * Method to get all the users lists from the database
   * @param {*} skip 
   * @param {*} limit 
   * @returns {Array} Returns array of users lists
   */
  async index(skip = 0, limit = 100) {
    return await User.find(
      {},
      {
        username: true,
        email: true,
        createdAt: true,
        updatedAt: true
      }
    )
      .limit(limit)
      .skip(skip)
      .lean()
      .exec();
  }

  /**
   * Method to register the user in the system
   * @param {*} userdata 
   * @returns {json} Returns recently created user data
   */
  async create(userdata) {
    let user = new User(userdata);
    user.setPassword(userdata.password);
    return user
      .save()
      .then(() => {
        return user.toUserData();
      })
      .catch((err) => {
        throw new Error(err.message);
      });
  }

  async update(id) {}

  async delete(id) {}
}

module.exports = Users;
