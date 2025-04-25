const express  = require("express")

const router = express.Router()

const mail = require("../controllers/mailController")
const res = require("../controllers/responsemail")

router.post("/mail",mail.sendMail)
router.post("/res",res.resposeMail)

module.exports = router