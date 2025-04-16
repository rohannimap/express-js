const express = require("express")
const router = express.Router()

const like = require("../controllers/like")


router.get("/dummy",like.dummy)
module.exports = router