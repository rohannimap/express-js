const sequelize = require("../config/db")
const { DataTypes} =require("sequelize")
// const sequelize = require("../config/db");
const connectDB = async()=>{
    try {
        await sequelize.authenticate()
        console.log("connect database succesfuly");
        
    } catch (error) {
        
        console.log(error);
        
    }
}

const Student = require("./student")(sequelize,DataTypes);
const Professor = require("./professor")(sequelize,DataTypes);
const Enrollment = require("./enrollment")(sequelize,DataTypes);
const Department = require("./department")(sequelize,DataTypes);
const Course = require("./course")(sequelize,DataTypes);
const Advisor = require("./advisor")(sequelize,DataTypes);



//studnet <->adviser   o-o
Student.hasOne(Advisor,{foreignKey:"studentId"})
Advisor.belongsTo(Student,{foreignKey:"studentId"})

//student <-> course   m-m
Student.belongsToMany(Course,{through:Enrollment,foreignKey:"studentId"})
Course.belongsToMany(Student,{through:Enrollment,foreignKey:"courseId"})

//professer-> course    o-m
Professor.hasMany(Course,{foreignKey:"courseId"});
Course.belongsTo(Professor,{foreignKey:"courseId"})

//department -> course    o-m
Department.hasMany(Course,{foreignKey:"departmentId"})
Course.belongsTo(Department,{foreignKey:"departmentId"})

//department -> student    o-m
Department.hasMany(Student,{foreignKey:"departmentId"})
Student.belongsTo(Department,{foreignKey:"departmentId"})


module.exports={
    sequelize,
    connectDB,
    Student,
    Professor,
    Enrollment,
    Department,
    Course,
    Advisor

}