
const movie = require("../services/comment")


exports.addComment =async (req,res)=>{
const {movieName,body,rating} = req.body;
const saveComment = movie.addComment(movieName,body,rating)
res.send("added comment")
}
