const Post = require('../models/post');
const User = require('../models/user');

exports.createPost = async (req, res) => {
  const { title, content, userId } = req.body;

  const post = await Post.create({ title, content, author: userId });

  // Add post to user's posts array
  await User.findByIdAndUpdate(userId, { $push: { posts: post._id } });

  res.json(post);
};
  
exports.getPostsWithAuthors = async (req, res) => {
  const posts = await Post.find().populate('author',"posts");
  // const test  = await Post.aggregate([{
  //   $group:{
  //     _id:"$author",
  //     countNum:{$sum:1}
  //   }
  // }])
  const test  = await Post.aggregate([
    // {
  //   $group:{
  //     _id:"$author",
  //     countNum:{$sum:1}
  //   },
  // },
  // {
  //   $lookup:{
  //     from:"users",
  //     localField:"author",
  //     foreignField:"_id",
  //     as:"userInfo"
  //   }
  // },
  // { $unwind: "$userInfo" }   
 
    // {
    //   $lookup: {
    //     from: "posts",
    //     localField: "_id",
    //     foreignField: "author",
    //     as: "userPosts"
    //   }
    // },
    // {
    //   $match: { "userPosts.0": { $exists: true } }
    // }
  

])
  res.json(test);

};
