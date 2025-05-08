const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth.routes');
// const formRoutes = require('./routes/form.routes');
require('dotenv').config();
const connectDb = require("./config/db")
const port = process.env.PORT || 3000

const app = express();
app.use(cors());
app.use(express.json());

connectDb()
app.use('/api/auth', authRoutes);
// app.use('/api/forms', formRoutes);
app.listen(port,()=>{
console.log("app listen on ",port);

})
module.exports = app;
