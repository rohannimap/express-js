const express = require('express')
const app = express()
require('dotenv').config()
const DBconnect = require("./config/databse")
const port = process.env.PORT || 3030

const route = require("./routes/student")

app.use(express.json())
app.use("/api",route)

DBconnect();
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))







