const express = require('express')
require("dotenv").config()
const app = express()
const port = 8080
const DbConnect = require("./config/db")
const postRoute = require("./routes/index.js")
app.use(express.json())

app.use("/api",postRoute)

DbConnect()
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))