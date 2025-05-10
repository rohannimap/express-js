 
 const { registerUser, findUserByUsername } = require("../services/auth.service")

 const {generateToken} = require("../utils/jwt")

 exports.register =async (req,res)=>{
try{
const user = await registerUser(req.body)
res.json("user registerd")
}
catch(err){
console.log(err.message);
res.json({
    message:err.message
})

}
 }

exports.login =async (req,res)=>{
    const {username,password} = req.body
    try{
            const user = await findUserByUsername(username);
            if(!user) return res.json({message:"user not found"})

            const isMatch = await user.comparePassword("password")
            if(!isMatch) return res.json({message:"invalid details"})
            
            const token = await generateToken({id:user.id,role:user.role.name})
            res.json({ token})
    }
    catch(err){
        console.log(err.message);
        res.json({
            message:err.message
        })
    }
}