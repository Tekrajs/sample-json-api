var jwt = require("express-jwt");
var secret = require("../../config").verifier;

/**
 * 
 * @param {*} req 
 * @returns 
 */
function getTokenFromHeader(req) {
  if (
    (req.headers.authorization && req.headers.authorization.split(" ")[0] === "Token") ||
    (req.headers.authorization && req.headers.authorization.split(" ")[0] === "Bearer")
  ) {
    return req.headers.authorization.split(" ")[1];
  }

  return null;
}

var auth = {
  required: jwt({
    secret: secret,
    userProperty: "payload",
    getToken: getTokenFromHeader,
    algorithms: ["HS256"]
  })
};

module.exports = auth;
