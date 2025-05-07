const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require("dotenv").config()

exports.registerUser =async (data)=>{
return await new User(data).save()
}

exports.loginUser =async (username,password)=>{
const user = await User.findOne({username})
if(!user || !(await bcrypt.compare(password,user.password))){
    throw new Error("invalid credintioals")
}
const token = jwt.sign({userId:user._id},process.env.JWT_SECRET,{expiresIn:"1h"})
return { user,token};
}