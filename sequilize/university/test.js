const express = require("express")

const connectDB = require("./models/index")

connectDB(0)
app.listen(3000,()=>{
    console.log("connet databse succesfuly");
})