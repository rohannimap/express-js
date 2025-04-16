const express = require('express')
const app = express()
require("dotenv").config()
const port = process.env.PORT || 3030

const route = require("./routes/post")

app.use(express.json())
app.use("/api/blog",route)

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))







