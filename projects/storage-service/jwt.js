var jwt = require("jsonwebtoken");
require('dotenv').config();

function generateToken(userDetails) {
  return token = jwt.sign(userDetails, process.env.JWT_SECRET, {
     expiresIn: 60 * 60 * 24 // expires in 24 hours
  });
}

module.exports={
    generateToken:generateToken
}