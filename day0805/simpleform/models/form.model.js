const mongoose = require("mongoose")

const formSchema = new mongoose.Schema({
    title:{
        type: String,
    },
    fields:{
        label:String,
        type:{type:String,enum:["text","number","date"],required:true},
        required:Boolean
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }

},
    {
        timestamps: true
      }


)

module.exports = mongoose.model("Form",formSchema)