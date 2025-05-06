const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
const postController = require('../controllers/post');
const testVal = require("../validation/check")

// User routes
router.post('/users', userController.createUser);
router.get('/users', userController.getUsersWithPosts);

// Post routes
router.post('/posts', postController.createPost);
router.get('/posts', postController.getPostsWithAuthors);

module.exports = router;
