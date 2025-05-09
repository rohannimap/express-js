const jwt = require('jsonwebtoken');
require("dotenv")

exports.cerateToken = (user)=>{
    return jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
}

exports.verifyToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET);
  };