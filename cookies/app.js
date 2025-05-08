

const express = require('express');
const connectDB = require('./config/db');
const formRoutes = require('./routes/formRoute');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();
app.use(express.json());
app.use('/api', formRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});








// let express = require("express");
// let cookieParser = require("cookie-parser");
// //setup express app

// let app = express();

// app.use(cookieParser());

// //basic route for homepage
// app.get("/", (req, res) => {
//    res.send("Express app is created successfully, and you are on homepage");
// });

// let tables = {
//    color: "brown",
//    material: "wood",
//    size: "small",
//    price: 100,
// };
// let homeWindow = {
//    color: "white",
//    material: "glass",
//    size: "big",
//    price: 200,
// };

// // set cookies for table and homeWindow with different expiry time
// app.get("/setCookies", (req, res) => {
//    res.cookie("tables", tables, { maxAge: 900000, httpOnly: true });
//    res.cookie("homeWindow", homeWindow, { maxAge: 600000, httpOnly: true });
//    res.send("Cookies are set with different expiry time");
// });

// // get cookies
// app.get("/getCookies", (req, res) => {
//    res.send(req.cookies);
// });

// // get cookies with specific name
// app.get("/getCookies/:name", (req, res) => {
//    res.send(req.cookies[req.params.name]);
// });

// // delete cookies with specific name
// app.get("/deleteCookies/:name", (req, res) => {
//    res.clearCookie(req.params.name);
//    res.send("Cookies with name " + req.params.name + " is deleted");
// });

// //server listens to port 3000
// app.listen(8000, (err) => {
//    if (err) throw err;
//    console.log("listening on port 8000");
// });