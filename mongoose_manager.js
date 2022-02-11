const mongoose = require("mongoose");

const initMongoose = () => {
  let mongoDB = process.env.MONGODB_URL || "mongodb://localhost/reason_digital";
  mongoose
    .connect(mongoDB, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    })
    .then(() => console.log("DB Connected!"))
    .catch((err) => {
      console.log(`DB Connection Error: ${err.message}`);
    });
};

module.exports = initMongoose;
