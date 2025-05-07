const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const contactRoutes = require('./routes/contactRoutes');
const userRoutes = require('./routes/userRoutes');
const { errorMiddleware } = require('./middleware/errorMiddleware');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use('/api/contacts', contactRoutes);
app.use('/api/users', userRoutes);
app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
