const mongoose = require("mongoose")

const comment = new mongoose.Schema({
    movieName:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    }
})

module.exports = mongoose.model("Comment",comment)