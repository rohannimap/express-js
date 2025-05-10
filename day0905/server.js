const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(express.json());

// DB Connect
mongoose.connect(process.env.MONGO_URI).then(() => console.log('MongoDB Connected'));

// Routes
const authRoutes = require('./routes/auth.routes');
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
