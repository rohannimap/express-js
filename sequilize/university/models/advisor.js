module.exports=(sequelize,DataTypes)=>{
return sequelize.define(
    "Advisor",
    {
        name:DataTypes.STRING
    
    }
)
}