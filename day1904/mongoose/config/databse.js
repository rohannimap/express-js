const mongoose = require('mongoose');
require('dotenv').config();

const DBconnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected ');
  } catch (err) {
    console.error('MongoDB connection failed ');
    process.exit(1);
  }
};

module.exports = DBconnect;
