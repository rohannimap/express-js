const express = require('express')
const app = express()
const port = 3000
app.use(express.json())

const router = require("./routes/upload")
app.use("/api",router)


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))