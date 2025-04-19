const mongoose = require("mongoose")

const studentModel = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
        createdAt: { type: Date, default: Date.now }
    
},{
    timestamps: true
}
)

module.exports = mongoose.model("std",studentModel)