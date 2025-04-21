const mongoose  = require("mongoose")
require("dotenv").config()


const DbConnect = ()=>{
    mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true}).then(()=>{
            console.log("connct successfuly!");
        }).catch((err)=>
        {
console.log(err.message);
console.log(err);
        })
}

module.exports = DbConnect