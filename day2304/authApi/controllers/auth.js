const auth = require("../models/auth")
const jwt = require("jsonwebtoken")
const {JWT_SECRET,JWT_EXPIRES_IN } = require("../config/config")
const { log } = require("node:console")

 exports.register=async(req,res)=>{
const {username,password}= req.body

try{
const user =await  auth.createUser(username,password)
res.status(200).json({
    success:true,
    message:"usercreated",
    user:{
        username:{username:user.username}
    }
})
}
catch(err){
    res.status(500).json({ error: 'Error registering user',message:err.message });
}
}


exports.login=async(req,res)=>{
    const {username,password} = req.body
try{
const user = await auth.findUser(username)
if(!user){
   return res.status(404).json({
        success:false,
        message:"user not found"
    })
}
const isMatch = await auth.comparePassword(password,user.password)
if(!isMatch){
   return res.status(400).json({
    success:false,
    message:"invalid password"
   })
}
const token = jwt.sign({ username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
res.json({token})
}
catch(err){
res.json(
    
    console.log("error in login",err)
)
}
}


exports.check=(req,res)=>{
const {id} = req.params;

const token = id
    const decoded = jwt.decode(token, { complete: true });
console.log('Decoded JWT:', decoded);
}
