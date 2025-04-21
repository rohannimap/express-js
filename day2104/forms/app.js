const express = require('express')
require("dotenv").config()
const bodyParser = require("body-parser")
const DbConnect = require("./config/database")
const form =require("./routes/form")
const app = express()
const port = process.env.PORT || 3000
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'));
app.use(express.json())


app.use("/api",form)
DbConnect()
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))