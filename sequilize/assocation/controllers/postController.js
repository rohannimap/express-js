// controllers/postController.js
const { sequelize } = require('../config/db');
const postService = require('../services/postServise');
// let a = []
exports.createPost = async (req, res) => {
  try {
    const result = await postService.createPost(req.body);
    res.status(201).json(result);
  } catch (err) {
    console.error(' CreatePost Error:', err.message);
    res.status(500).json({ error: err.message });
  }
};

exports.getAllPosts = async (req, res) => {
  try {
    // const posts = await postService.getAllPosts();
    
    const [title] = await sequelize.query("SELECT * FROM posts WHERE id = :id",{
      // replacements:{id=Number(req.body)}
    })
    res.status(200).json(title);
  } catch (err) {
    console.error(' GetPosts Error:', err.message);
    res.status(500).json({ error: err.message });
  }
};


// module.exports = a