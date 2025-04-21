const mongoose = require("mongoose")
require("dotenv").config()
const DbConnect = ()=>{
    mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(()=>{
        console.log("db connected succesfuly!");
    }).catch((err)=>{
        console.log("db error");
        console.log(err.meggage);
    })
}


module.exports = DbConnect