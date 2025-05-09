const mongoose = require("mongoose")

const response = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Form",
        required:true
    },
    data:{
        type:Object,
        required:true
    }
},{
    timestamps:true
})

module.exports = mongoose.model("Response",response)