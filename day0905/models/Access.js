const mongoose = require("mongoose")

const accessSchema = new mongoose.Schema({
    resource:{
        type:String,
        required:true
    },
    action:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('Access', accessSchema);