const mongoose = require("mongoose")

const roleSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        enum:['First', 'Second', 'Third'],
        unique:true
    },
    permission:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Access"
    }

})


module.exports = mongoose.model('Role', roleSchema);