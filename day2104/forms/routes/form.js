const express = require("express")
const router = express.Router()
const formController  = require("../controllers/form")
const joke = require("../controllers/joke")
const auth = require("../controllers/auth")

// const postController = require('../controllers/postController');
// router.get('/create', postController.createPost);
// router.get('/post', postController.getPost);


router.get("/",formController.getForm)

router.post("/submit",formController.submitForm)

router.get("/joke",joke.saveJoke)

router.get("/login",auth.loginPage)
router.post("/register",auth.user)
router.post("/login",auth.login)


module.exports = router

