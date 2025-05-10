const Role = require('../models/Role');

const checkPermission = (resource, action) => {
  return async (req, res, next) => {
    const role = await Role.findOne({ name: req.user.role }).populate('permissions');
    const hasPermission = role?.permissions?.some(
      (p) => p.resource === resource && p.action === action
    );
    if (!hasPermission) return res.status(403).json({ error: 'Access denied' });
    next();
  };
};

module.exports = { checkPermission };
