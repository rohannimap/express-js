const db = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const User = db.User;

exports.register = async (req, res) => {
  const { username, password, role } = req.body;

  try {
    const user = await User.create({ username, password, role });
    res.status(201).json({ message: "User created", user: { username, role } });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ where: { username } });
    if (!user) return res.status(404).json({ message: "User not found" });

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET);
    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
