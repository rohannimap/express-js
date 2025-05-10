const User = require("../models/User")

const registerUser =async (userData)=>{
const user  = new User(userData);
await user.save();
return user;
}

const findUserByUsername =async (username)=>{
return await User.findOne({username}).populate("role")
}

module.exports = { registerUser, findUserByUsername };