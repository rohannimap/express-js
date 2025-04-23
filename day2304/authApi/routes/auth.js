const express = require("express")
const router = express.Router()
const auth = require("../controllers/auth")
const {checkReq,authenticate} = require("../middlewares/auth")

router.post("/register",checkReq,auth.register)
router.post("/login",auth.login)
router.get("/check/:id",auth.check)


// router.get('/protected', authenticate, (req, res) => {
//     res.json({ message: `Hello ${req.user.username}, you have access to this protected route.` });
//   });

module.exports = router;
