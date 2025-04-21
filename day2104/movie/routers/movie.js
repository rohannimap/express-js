const express = require("express")
const router = express.Router()

const movieRoute = require("../controllers/movie")
const commentRoute = require("../controllers/comment")

router.post("/movie",movieRoute.postMovie)
router.post("/comment",commentRoute.addComment)

router.get("/movie/:name",movieRoute.getMovie)


module.exports = router
