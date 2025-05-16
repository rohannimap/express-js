const authService = require('../services/auth');

const register = async (req, res) => {
  try {
    const { user, token } = await authService.register(req.body);
    res.json({ user, token });
  } catch (err) {
    res.json({ message: err.message });
  }
};

const login = async (req, res) => {
  try {
    const { user, token } = await authService.login(req.body);
    res.json({ user, token });
  } catch (err) {
    res.json({ message: err.message });
  }
};


module.exports = { register, login };
