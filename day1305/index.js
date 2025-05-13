const express = require('express')
const app = express()
const port = 8080
const bodyParser  = require("body-parser")
const {connectDB} = require("./config/db")
const {User} = require("./models/user")
const userRotute = require("./routes/user")


// app.use(bodyParser)
app.use(bodyParser.json())

User.sync()
app.use("/api",userRotute)
// connectDB()
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, async() =>{ console.log(`Example app listening on port ${port}!`)
await connectDB()
})