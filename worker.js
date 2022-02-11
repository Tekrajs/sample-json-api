let https = require("https");
const initMongoose = require('./mongoose_manager');
let Post = require("./models/post");

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

const req = https.request(options, (res) => {
  console.log(`statusCode: ${res.statusCode}`);
  let options = {
    upsert: true,
    returnNewDocument: true
  };
  let data = "";
  res
    .on("data", (chunk) => {
      data += chunk;
    })
    .on("end", async () => {
      let data_processed = JSON.parse(data);
      if (data_processed.length > 0) {
        for (let i = 0; i < data_processed.length; i++) {
          let new_data = data_processed[i];

          /*  for (const [key, value] of Object.entries(new_data)){
            update[key] = value;
          } */
          await Post.findOneAndUpdate({ ref_id: new_data.id }, new_data, options).catch((e) => {
            console.log(e);
          });
        }
      }
    });
});

req.on("error", (error) => {
  console.error(error);
});

//   req.write(data)
req.end();
