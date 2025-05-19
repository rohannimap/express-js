const {Sequelize}=require("sequelize")

const sequelize = new Sequelize("auth","root","Rohan@9158",{
    host:"localhost",
    dialect:"mysql"
})

const connectDB = async()=>{
try {
    await sequelize.authenticate();
    console.log("connect database succesfuly");
    
} catch (error) {
    console.log(error);
    
}
}

module.exports = {sequelize,connectDB}