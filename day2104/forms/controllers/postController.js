const Post = require('../models/post');
const User = require('../models/user');

// Create sample user and post
exports.createPost = async (req, res) => {
  const user = await User.create({ name: 'Alice' });
  const post = await Post.create({
    title: 'My First Post',
    content: 'Hello World!',
    author: user._id,
  });
  res.json(post);
};

// Get post with populated author
exports.getPost = async (req, res) => {
  const post = await Post.findOne().populate('author');
  res.json(post);
};
