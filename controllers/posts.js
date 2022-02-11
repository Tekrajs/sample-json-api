const { getLiveData } = require("../agent");
const Post = require("../models/post");
class Posts {
  constructor() {
    this.fetch_live_data = (process.env.FETCH_LIVE_DATA==="true") || false;
  }

  /**
   * 
   * @param {*} skip 
   * @param {*} limit 
   * @returns {Array} Returns array of post data 
   */
  async index(skip = 0, limit = 100) {
    if (this.fetch_live_data === true) {
      return await getLiveData({
        hostname: "dinotest.wpengine.com",
        path: "/wp-json/wp/v2/posts",
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });
    } else {
      return await Post.find({}).skip(skip).limit(limit).lean().exec();
    }
  }

  /**
   * 
   * @param {Number} id 
   * @returns {json} Returns single user data
   */
  async show(id) {
    if (this.fetch_live_data === true) {
      return await getLiveData({
        hostname: "dinotest.wpengine.com",
        path: `/wp-json/wp/v2/posts/${id}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });
    }

    return await Post.findById(id).lean().exec();
  }
}

module.exports = Posts;
