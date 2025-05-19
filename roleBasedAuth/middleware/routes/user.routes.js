const express = require("express")

const router = express.Router()
const userController =  require("../controllers/user.controller")
const logger = require("../middleware/logger")
const validate = require("../middleware/validators")
 const checkMiddleware =  require("../middleware/checkMiddleware")

router.post("/user",  logger,validate,checkMiddleware,userController.insertUser)
router.get("/user",logger,userController.getUser)


module.exports = router