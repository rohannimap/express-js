const express = require("express")
require("dotenv").config()
const timeRoutes = require("./routes/time")

const app = express()
app.use(express.json)
const PORT = process.env.PORT || 8080;

app.use("/api/time",timeRoutes)

app.listen(PORT,()=>{
    console.log("app listen on " ,PORT);
})
