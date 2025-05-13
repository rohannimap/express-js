const {Sequelize} = require("sequelize")


const sequelize = new Sequelize("demo","root","Rohan@9158",{
    host:"localhost",
     dialect:"mysql"
})

const connectDB = async()=>{
    try{
      await sequelize.authenticate();
      console.log("connect succesfully")
    }
    catch(err){
            console.log(err);
    }
}

// connectDB()
module.exports = {sequelize,connectDB}