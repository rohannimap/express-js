const mongoose  = require("mongoose")
require("dotenv").config()
const DBconnect = ()=>{
    mongoose.connect(process.env.DATABSE_URL,{}).then(()=>{
        console.log("connect succesfully!");
    }).catch((err)=>{
        console.log("error in connection");
        console.log(err);
        process.exit(1)
    })
}

module.exports = DBconnect