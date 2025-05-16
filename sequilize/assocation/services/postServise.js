const a = require("../controllers/postController")
const Post  = require('../models/post');

async function createPost(data) {
  const post = await Post.create(data);
  return  post ;
}

async function getAllPosts() {
  const posts = await Post.findAll();
  return posts;
}

module.exports = {
  createPost,
  getAllPosts,
};
