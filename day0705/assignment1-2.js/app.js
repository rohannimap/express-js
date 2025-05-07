const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const authenticateUser = require('./middleware/authMiddleware');

const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Connect to the database
connectDB();

// Use user routes
app.use('/api', userRoutes);

// Protected route using authentication middleware
app.get('/api/protected', authenticateUser, (req, res) => {
  res.send(`Hello ${req.user.name}, you are authenticated!`);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
