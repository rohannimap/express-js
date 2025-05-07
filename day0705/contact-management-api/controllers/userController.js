
const userService = require('../services/userService');

exports.registerUser = async (req, res, next) => {
  try {
    const user = await userService.registerUser(req.body);
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
};

exports.loginUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const result = await userService.loginUser(username, password);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};
