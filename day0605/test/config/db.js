const mongoose = require("mongoose")
require("dotenv").config()

const DbConnect = ()=>{
    mongoose.connect("mongodb://localhost:27017/agr").then(()=>{
        console.log("connected succesfully!");
        
    }).catch((err)=>{
        console.log("error occured");
        console.log(err);
        process.exit(1)
    })
}


module.exports = DbConnect