const User = require("../models/user")



exports.insertUser=async(name,age)=>{
const NewUser  = new User(name,age)
await NewUser.save()
return NewUser
}