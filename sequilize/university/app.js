const express = require("express");
const app = express();
const { sequelize } = require("./models/index");

app.use(express.json());

sequelize.sync({ alter: true }).then(() => {
  console.log("Database synced");
  app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
  });
});
