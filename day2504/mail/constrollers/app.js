const express = require('express')
const app = express()
const port = 3000
app.use(express.json())
const route = require("./routes/mail")

app.use("/api",route)

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))