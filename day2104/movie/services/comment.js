


const Comment = require("../models/comment")



exports.addComment = async(movieName,body,rating)=>{
    const saveComment = new Comment({movieName,body,rating});
    await saveComment.save();
    return saveComment
    }
