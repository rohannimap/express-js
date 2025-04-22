const mongoose = require("mongoose")

require("dotenv").config()

const DBConnect = ()=>{
    mongoose.connect(process.env.MONGO_URI,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
    }).then(()=>{
        console.log("Db connected succusfuly!");
        
    }).catch((err)=>{
        console.log(err.message);
        process.exit(1)
        
    })
}

module.exports = DBConnect
