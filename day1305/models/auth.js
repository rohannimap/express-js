const {DataTypes} = require("sequelize")
const {sequelize} = require("../config/db")

const User = sequelize.define('auth', {
  username: DataTypes.STRING,
  password: {
    type: DataTypes.STRING,
    set(value) {
      this.setDataValue('password', hash(this.username + value));
    },
  },
});





