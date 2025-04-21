const register = require("../services/register")
const path = require("path")
exports.user =async (req,res)=>{
const {name,email,password} = req.body
const adduser = await register.register(name,email,password)
res.json(adduser)

}

exports.loginPage = (req,res)=>{
 res.sendFile(path.resolve(__dirname, '../views/login.html'));
}




exports.login= async(req,res)=>{
const {email,password}= req.body;
const isFindUser = await register.login(email,password)
if(isFindUser){
   res.sendFile(path.resolve(__dirname, '../views/form.html'));
   
}else{
    res.send("user not found")
}
}

