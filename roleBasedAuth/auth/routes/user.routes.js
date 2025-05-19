const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/auth.middleware");
const allowRoles = require("../middleware/role.middleware");
const userCtrl = require("../controllers/user.controller");

router.get("/admin", verifyToken, allowRoles("admin"), userCtrl.adminOnly);
router.get("/user", verifyToken, allowRoles("user", "admin"), userCtrl.userOnly);

module.exports = router;



