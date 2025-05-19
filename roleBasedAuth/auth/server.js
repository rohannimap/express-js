const express = require("express");
const app = express();
require("dotenv").config();

const db = require("./models");
const authRoutes = require("./routes/auth.routes");
const userRoutes = require("./routes/user.routes");

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

db.sequelize.sync().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
});
