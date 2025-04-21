const Movies = require("../models/movie")
const Comment = require("../models/comment")

exports.postMovie=async(movieName,rating)=>{

    const moviePost  = new Movies({movieName,rating});
   await moviePost.save();
return moviePost;

}

exports.getMovie =async (name)=>{

// const rate = await Comment.find({data:{rating}})
const result = await Comment.aggregate([
    {
      $match: { movieName: name }
    },
    {
      $group: {
        _id: "$movieName",
        reviews: {
          $push: {
            body: "$body",
            rating: "$rating"
          }
        },
        ratings: {
          $push: "$rating"
        },
        averageRating: { $avg: "$rating" }
      }
    }
  ]);
  
return result
}
