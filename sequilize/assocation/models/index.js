const {sequelize}= require("../config/db")
// const User = require("./User")
const User = require("./user")
const Profile = require("./profile");
const Post = require("./post");
        
        
const conncetDB =async ()=>{
    try {
        await sequelize.authenticate();
        console.log("connect database connect succesfuly");

    } catch (error) {
        console.log(error);
        
    }
}

User.hasOne(Profile,{foreignKey: 'userId'})
Profile.belongsTo(User,{foreignKey: 'userId'})

User.hasMany(Post, { foreignKey: 'userId' });
Post.belongsTo(User, { foreignKey: 'userId' });





module.exports = {conncetDB,User,Profile,Post}