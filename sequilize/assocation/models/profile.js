const {DataTypes} = require("sequelize")
const {sequelize} = require("../config/db")


const Profile = sequelize.define("Profile",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    bio:{
        type:DataTypes.STRING,

    },
    userId:{
        type:DataTypes.INTEGER,
        unique:true
    }
},{
    tableName:"profiles",
    timestamps:true
})


module.exports = Profile
