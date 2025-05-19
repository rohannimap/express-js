const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");


const JWT_SECRET = process.env.JWT_SECRET;

exports.createUser =async(req,res)=>{
    const {email,password} = req.body;
try {
    const hashPassword = await bcrypt.hash(password,10)
    await User.create({email,password:hashPassword})
    res.json("user inserted")
} catch (error) {
    console.log(error);
    
}
}

exports.login = async(req,res)=>{
    const{email,password} = req.body
try {
    const user= await User.findAll({email})
    if(!user) return res.json("user not register")
    const isMatch = await bcrypt.compare(password,user.password)
    if(!isMatch) return res.json("invalid credintial")
    const token = jwt.sign({id:user.id,email:user.email},JWT_SECRET,{expiresIn:"1h"})
    res.json({token}



    )
} catch (error) {
    console.log(error);
}
}