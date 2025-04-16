const mongoose =require("mongoose")

const postModel = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    comment:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Comment"
        }
    ],
    like:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Like"
    }]
})

module.exports = mongoose.model("Post",postModel)