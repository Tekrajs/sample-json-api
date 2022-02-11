let https = require("https");

const getLiveData = async (options) => {
  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let data = "";
      res
        .on("data", (chunk) => {
          data += chunk;
        })
        .on("end", async () => {
            
          let data_processed = JSON.parse(data);
          if (data_processed) {
            resolve(data_processed);
          } else {
            resolve(null);
          }
        });
    });

    req.on("error", (error) => {
      reject(error);
    });

    req.end();
  });
};

module.exports = {
  getLiveData
};
