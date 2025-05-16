const {DataTypes}= require("sequelize")
const {sequelize} = require("../config/db")


const Post = sequelize.define("Post",{
    title:{
            type:DataTypes.STRING,
            allowNull:false
    },
    content:{
            type:DataTypes.TEXT,
            
    },
    userId:{
                type:DataTypes.INTEGER,
                allowNull:false 
    }
})

module.exports = Post