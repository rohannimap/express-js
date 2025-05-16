const {Sequelize} = require("sequelize")
require("dotenv").config()

const sequelize = new Sequelize("demo","root","Rohan@9158",{
    host:"localhost",
    dialect:"mysql"
})

module.exports = {sequelize}