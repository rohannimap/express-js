const mongoose = require("mongoose")

const field = new mongoose.Schema({
    label:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    required:{
        type:Boolean
    }
},{
    _id:false
})


module.exports = mongoose.model("Field",field)