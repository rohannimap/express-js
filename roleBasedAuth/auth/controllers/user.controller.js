exports.adminOnly = (req, res) => {
  res.json({ message: "Welcome, Admin!" });
};

exports.userOnly = (req, res) => {
  res.json({ message: "Welcome, User!" });
};
