const mongoose = require("mongoose")

const movie = new mongoose.Schema({
        movieName:{
            type:String,
            required:true
        },
        rating:{
            type:Number
        },
        createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model("Movie",movie)