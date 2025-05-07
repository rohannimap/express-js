const User = require("../models/user")

const userUtils = require("../utils/passwordUtils")

exports.createUser = async(userData)=> {
const {name,email,password} = userData;
const hashedPassword = await userUtils.hashPassword(password)
const newUser = new User({name,email,password:hashedPassword})
await newUser.save()
return newUser
}

exports.getUserByMail = async(email)=>{
const user = await User.findOne({email})
return user
}

exports.validateUser = async(user,password)=>{
const isMatch = await userUtils.comparePassword(password,user.password)
return isMatch
}