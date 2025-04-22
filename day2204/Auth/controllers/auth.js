const bcrypt = require("bcrypt")
const User = require("../models/user")


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


exports.login =async (req,res)=>{
        
}