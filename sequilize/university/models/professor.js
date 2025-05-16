module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Professor", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
  });
};
