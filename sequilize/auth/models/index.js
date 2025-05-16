const {sequelize} = require("../config/db")

const connectDB = async()=>{
    try {
        await sequelize.authenticate();
        console.log("Databse conncet succesfuly");
        
    } catch (error) {
        console.log(error);
        console.log(error.message);

    }
}

module.exports = {connectDB}