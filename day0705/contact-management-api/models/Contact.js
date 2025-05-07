const mongoose  = require("mongoose")

const contact = new mongoose.Schema({
    name:{ type:String,required:true},
    email:{type:String,require:true },
    phone: { type:String,require:true},
    owner:{type:mongoose.Schema.Types.ObjectId,ref:"User" },
    createdAt:{type:Date,default:Date.now }
})

module.exports = mongoose.model("Contact",contact)