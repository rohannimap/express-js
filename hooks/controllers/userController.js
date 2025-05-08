const User = require('../models/user');

// Create user (triggers: validate, save)
exports.createUser = async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.json(user);
};

// Get all users (triggers: find)
exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

// Update user (triggers: updateOne)
exports.updateUser = async (req, res) => {
  const result = await User.updateOne({ _id: req.params.id }, { name: req.body.name });
  res.json(result);
};

// Delete user (triggers: deleteOne)
exports.deleteUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  await user.deleteOne(); // document middleware
  res.json({ message: 'User deleted' });
};

// FindOneAndUpdate
exports.findOneAndUpdateUser = async (req, res) => {
  const user = await User.findOneAndUpdate({ _id: req.params.id }, { name: req.body.name }, { new: true });
  res.json(user);
};

exports.validateUser = async (req, res) => {
  const user = new User(req.body);
  await user.validate(); // triggers validate hooks only
  res.json({ message: 'Validation passed!' });
};
