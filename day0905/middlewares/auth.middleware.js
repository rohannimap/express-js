const jwt  = require("jsonwebtoken");
const { jwtSecret } = require('../config/jwt');

const authMiddleware = (req,res,next)=>{
const authHeader = req.headers.authorization;
if(!authHeader || !authHeader.startsWith('Bearer ')){
  return res.json({message:"Authorization token missing"})
}

const token  = authHeader.split(" ")[1]

try{
    const decode = jwt.verify(token,jwtSecret);
    req.user = decode;
    next()
}
catch(err){
console.log(err);
res.json({message:err.message});
}
}


module.exports = authMiddleware