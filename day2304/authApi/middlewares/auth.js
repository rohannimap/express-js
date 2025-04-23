const jwt = require("jsonwebtoken")
const {JWT_SECRET}= require("../config/config")


function checkReq(req, res, next) {
    console.log('Request received at:', new Date().toLocaleDateString());
    next(); // Passes control to the next middleware or route
}



function authenticate(req,res,next){
    // const token = req.header('Authorization')?.replace('Bearer ', '');
    // if (!token) return res.status(401).json({ error: 'Access denied. No token provided.' });
const token = res.body.token;
if(!token){
    return res.json({
        message:"not token founded"
    })
}
try{
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // Attach the user data (from the JWT payload) to the request
    next();
}
catch (err) {
    return res.status(400).json({ error: 'Invalid token' });
  }
}

module.exports = {checkReq,authenticate}