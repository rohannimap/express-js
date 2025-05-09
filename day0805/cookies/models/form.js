const mongoose = require("mongoose")
const Field = require("./field")

const form = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    field:[Field]
},{
    timestamps:true
})

module.exports = mongoose.model("Form",form)