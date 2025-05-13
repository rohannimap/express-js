const express = require("express")
const router = express.Router()

const {findUser,test} = require("../controllers/user")

// router.get("/",insert)
router.get("/:id",findUser)
// router.get("/",test)

module.exports = router