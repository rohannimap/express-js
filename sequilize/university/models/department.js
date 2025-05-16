module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Department", {
    name: DataTypes.STRING,
  });
};
