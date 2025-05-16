// const {sequelize} = require("../config/db")
const { DataTypes } = require('sequelize');
const {sequelize} = require('../config/db');
// const bcrypt = require(bcrypt)

const User = sequelize.define('User', {
  name: { 
    type: DataTypes.STRING, allowNull: false 
},
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false,
    set(value){
        const hashed = bcrypt.hashSync(value,10);
        this.setDataValue('password',hashed)
    }
   },
});

module.exports = User;
