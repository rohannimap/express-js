const {DataTypes} = require("sequelize")
const {sequelize} = require("../config/db")

const Users = sequelize.define("User",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    }
},{
    tableName:"users",
    timestamps:true
})

module.exports =Users