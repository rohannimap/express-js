// const express = require("express")
// const mailRoute = require("../constrollers/mail")
// const router = express.Router()

// router.post("/mail",mailRoute.mail)

// module.exports = router

const express = require("express");
const mailRoute = require("../mail"); // Ensure the path to the controller is correct
const router = express.Router();

router.post("/mail", mailRoute.mail);

module.exports = router;
