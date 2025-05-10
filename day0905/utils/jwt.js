const jwt = require("jsonwebtoken")

const {jwtSecret} = require("../config/db")

const generateToken  = (payload)=>{
return jwt.sign(payload,jwtSecret,{expiresIn:'1d'})
}

const verifyToken = (token)=>{
return jwt.verify(token,jwtSecret)
}

module.exports = { verifyToken, generateToken }