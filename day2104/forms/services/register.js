const Auth = require("../models/auth")


exports.register =async(name,email,password)=>{
const adduser = new Auth({
    name,email,password
})
await adduser.save()
return adduser
}

exports.login = async (email,password)=>{
    const user = await Auth.findOne({email,password})
    return user;
}