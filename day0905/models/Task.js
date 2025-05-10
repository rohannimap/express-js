const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    assignedTo:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category"
    },
    status:{
        type:String,
        enum:["Pending", "In Progress", "Completed"]
    },
    default: 'Pending'
},
{ timestamps: true }
)

module.exports =  mongoose.model("Task",taskSchema)