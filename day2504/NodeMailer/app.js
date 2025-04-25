const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const mailRoutes = require("./routes/mailRoutes");
const DbConnect = require("./config/database")
dotenv.config(); 

const app = express();
const port = 3000;


app.use(express.json());



DbConnect.connect();
app.use("/api", mailRoutes);

app.get("/", (req, res) => res.send("Welcome to the Mail API with MongoDB!"));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
