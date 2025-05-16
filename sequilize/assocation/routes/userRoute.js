const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const postController = require('../controllers/postController');

router.post('/user', userController.CreateUser);         // POST /users
router.post('/profile', userController.CreateProfile);      // GET /users/1
router.get("/user/:id",userController.getUserWithProfile)
router.post('/post', postController.createPost);
router.get('/posts', postController.getAllPosts);
module.exports = router;




