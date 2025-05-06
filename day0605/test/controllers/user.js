const User = require('../models/user');
const Post = require('../models/post');

exports.createUser = async (req, res) => {
  const user = await User.create({ name: req.body.name });
  res.json(user);
};

exports.getUsersWithPosts = async (req, res) => {
  const users = await User.find().populate("posts")
  res.json(users);
};
