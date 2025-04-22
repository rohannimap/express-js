const express = require('express')
const app = express()
require("dotenv").config()
const DBConnect = require("./config/database")
const user = require("./routes/user")
const port = process.env.PORT || 3000
app.use(express.json())
app.use("/api",user)


DBConnect()
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))