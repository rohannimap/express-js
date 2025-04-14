// server.js
const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();

// Set up storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Make sure this folder exists
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique name
  }
});

const upload = multer({ storage: storage });

// Route to handle file upload
app.post('/upload', upload.single('file'), (req, res) => {
  console.log(req.file); // file info
  res.send('File uploaded successfully!');
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
