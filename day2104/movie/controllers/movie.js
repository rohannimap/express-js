// const Movies = require("../models/movie")
const Comment = require("../services/comment")
const movie = require("../services/movie")

exports.postMovie=(req,res)=>{
const {movieName,rating} = req.body
const postMovie = movie.postMovie(movieName,rating);
res.send("succes",postMovie)
}

exports.getMovie =async(req,res)=>{
const {name} = req.params;
const getMovie = await movie.getMovie(name);

res.json(getMovie)
}