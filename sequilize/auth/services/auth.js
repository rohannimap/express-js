const bcrypt = require('bcryptjs');
const User = require('../models/user');
const generateToken = require('../utils/generateToken');

const register = async ({ name, email, password }) => {
  const existUser = await User.findOne({ where: { email } });
  if (existUser) throw new Error('User already exists');

  // const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, password });
  const token = generateToken(user.id);
  return { user, token };
};


const login = async ({ email, password }) => {
  const user = await User.findOne({ where: { email } });
  if (!user) throw new Error('Invalid credentials');

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error('Invalid credentials');

  const token = generateToken(user.id);
  return { user, token };
};


module.exports = { register, login };
