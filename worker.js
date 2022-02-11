const initMongoose = require("./mongoose_manager");
let Post = require("./models/post");
let { getLiveData } = require("./agent");
initMongoose();

const post_api = "dinotest.wpengine.com";

let options = {
  hostname: post_api,
  path: "/wp-json/wp/v2/posts",
  method: "GET",
  headers: {
    "Content-Type": "application/json"
  }
};

getLiveData(options)
  .then(async (data) => {
    for (let i = 0; i < data.length; i++) {
      let new_data = data[i];
      new_data._id = new_data.id;
      delete new_data.id;
      await Post.findOneAndUpdate({ _id: new_data._id }, new_data, {
        upsert: true
      }).catch((e) => {
        console.log(e);
      });
    }
    process.exit(0);
  })
  .catch((err) => {
    console.log(err);
  });
