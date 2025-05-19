const { DataTypes } = require("sequelize")
const {sequelize}= require("../config/db.config")

const User  = sequelize.define("user",{
    name:{
        type:DataTypes.STRING,
        // allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        unique:true,
        validate:{
            isEmail:true
        }
    }
})

module.exports = {User}


