const express = require('express')
const app = express()
const port = 3000
const {connectDB}= require("./config/db.config")
const bodyParser = require("body-parser")
const {User}= require("./models/user.model")
const userRoute = require("./routes/user.routes")

app.use(bodyParser.json())
app.use("/api",userRoute)


User.sync()
connectDB()
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))