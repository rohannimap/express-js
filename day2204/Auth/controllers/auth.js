const bcrypt = require("bcrypt")
const User = require("../models/user")
const jwt = require("jsonwebtoken")
require("dotenv").config()
const path = require("path")



exports.signup =async (req,res)=>{
try{
const {name,email,password,role}=req.body;
const userExist = await User.findOne({email})

if(userExist){
    res.status(400).json({
        success:false,
        message:"user already exist"
    })
}

let hashPassword;
try{
hashPassword = await bcrypt.hash(password,10)
}
catch{
res.status(500).json({
    success:false,
    message:"error in create hash"
})
}
const user = await User.create({name,email,password:hashPassword,role})
return res.status(200).json({
    success:true,
    message:"user created"
})
}
catch{
    console.log(err.message);
    
return res.status(500).json({
success:false,
message:"user not register"

})
}
}


exports.login = async(req,res)=>{
    try{
        const {email,password} =req.body;
        if(!email || !password){
          return  res.status(400).json({
                success:false,
                message:"enter complete field"
            })
        }

        const user = await User.findOne({email})
        if(!user){
          return  res.status(400).json({
                success:false,
                message:" user not register"
            })
        }
        const payload = {
            email:user.email,
            id:user._id,
            role:user.role
        }
        if(await bcrypt.compare(password,user.password)){
                    let token = jwt.sign(payload,process.env.JWT_SECRATE,{
                        expiresIn:"1h"
                    });
                user.token = token;
                user.password = undefined;
                const options= {
                            expiresIn:new Date(Date.now() +3*24*60*60*1000),
                            httpOnly:true
                }
                res.cookie("token",token,options).status(200).json({
                    success:true,
                    token,
                    user,
                    message:"user login succesfuly!"
                })



        }else{
            return res.status(500).json({
                success:false,
                message:"Password incurect"
            })
        }
    }
    catch(err){
            console.log(err.message);
            return res.status(400).json({
                success:false,
                message:"login faliled"
            })
            
    }
        
}