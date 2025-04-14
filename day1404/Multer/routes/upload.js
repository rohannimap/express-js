const express = require("express")
const router = express.Router()
const uploadRoute=require("../controller/upload")
const upload = require("../middelware/uploadmiddleWare")


router.post("/upload",upload.single("file"),uploadRoute.uploadfile)


module.exports = router