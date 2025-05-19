const express = require('express')
const app = express()
const port = 3000
require("dotenv").config()
const User = require("./models/user")
const {connectDB}=require("./config/database")
const userRoute = require("./routes/authRoutes")
app.use(express.json())

app.use("/api",userRoute)
User.sync()
connectDB()
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))