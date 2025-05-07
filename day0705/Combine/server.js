const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const taskRoutes = require('./routes/task');
// require('./jobs/taskJob'); // Start cron jobs

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

connectDB();
app.use(express.json());
app.use('/api', taskRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
