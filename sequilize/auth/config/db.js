const {Sequelize}= require("sequelize")

const sequelize = new Sequelize(process.env.NAME || "auth", process.env.USER || "root", process.env.PASS || "Rohan@9158", {
  host: process.env.HOST || "localhost",
  dialect: 'mysql',
});

module.exports = {sequelize}