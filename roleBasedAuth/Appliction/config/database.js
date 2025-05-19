const {Sequelize}= require("sequelize")
require("dotenv").config()

const sequelize = new Sequelize(process.env.DB_URL || "mysql://root:rohan9158@localhost:3306/auth",{
    dialect:"mysql"
})

const connectDB = ()=>{
    sequelize.authenticate();
    console.log("connect Database succesfuly")
}

module.exports = {sequelize,connectDB}













