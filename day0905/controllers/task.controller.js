const Task = require('../models/Task');

exports.createTask = async (req, res) => {
  const task = new Task({ ...req.body, createdBy: req.user.id });
  await task.save();
  res.status(201).json(task);
};

exports.getTasks = async (req, res) => {
  const tasks = await Task.find().populate('assignedTo createdBy');
  res.json(tasks);
};

exports.updateTask = async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(task);
};

exports.deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
};
