const express = require("express");
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 4000;


app.use(express.json());

require("./config/database").connect();


const user = require("./routes/user");
app.use("/api", user);

app.listen(PORT, () => {
    console.log(`App is listening at ${PORT}`);
})