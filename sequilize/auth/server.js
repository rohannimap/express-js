const express = require('express');
const dotenv = require('dotenv');
const { connectDB } = require('./models/index');
const authRoutes = require('./routes/authRoute');
const PORT = process.env.PORT || 5000;
dotenv.config();
const User= require("./models/user")

const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);


User.sync()
connectDB()
app.listen(PORT,()=>{
    console.log("listen port on the ",PORT);
})

app.get("/",(req,res)=>{
res.send("hello")
})
