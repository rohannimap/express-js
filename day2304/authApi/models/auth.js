const bcrypt = require("bcryptjs")

const users = []

async function createUser(username,password){
const hashedPassword = await bcrypt.hash(password,10)
const user = {username,password:hashedPassword}
users.push(user)
return user;
}


function findUser(username){
return users.find(user=>user.username == username)
}

async function comparePassword(password,hashedPassword){
    return bcrypt.compare(password,hashedPassword)
}


module.exports={
    createUser,findUser,comparePassword
}

