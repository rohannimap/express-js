// const {DataTypes}  =require("sequelize")

// const {sequelize} = require("../config/db")

// const User = sequelize.define('test', {
//   id: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     autoIncrement: true //
//   },
//   name: DataTypes.STRING,
//   email: DataTypes.STRING,
//   age:DataTypes.INTEGER,
//   createdAt: DataTypes.DATE,
//   updatedAt: DataTypes.DATE
// }, 
// {
//   tableName: 'test1',
//   timestamps: true
// });

// // class User extends Model {}
// // User.init(
// //   {
// //     username: {
// //       type: DataTypes.STRING,
// //       allowNull: true,
// //       validate: {
// //         len: [5, 10],
// //       },
// //     },
// //   },
// //   { sequelize },
// // );

// // -----
// // class Place extends Model {}
// // Place.init(
// //   {
// //     name: Sequelize.STRING,
// //     address: Sequelize.STRING,
// //     latitude: {
// //       type: DataTypes.INTEGER,
// //       validate: {
// //         min: -90,
// //         max: 90,
// //       },
// //     },
// //     longitude: {
// //       type: DataTypes.INTEGER,
// //       validate: {
// //         min: -180,
// //         max: 180,
// //       },
// //     },
// //   },
// //   {
// //     sequelize,
// //     validate: {
// //       bothCoordsOrNone() {
// //         if ((this.latitude === null) !== (this.longitude === null)) {
// //           throw new Error('Either both latitude and longitude, or neither!');
// //         }
// //       },
// //     },
// //   },
// // );
// module.exports = {User}

// --------------------------

const {  DataTypes } = require('sequelize');
const {sequelize} = require("../config/db");

const User = sequelize.define(
  'user',
  {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
  },
  {
    getterMethods: {
      fullName() {
        return this.firstName + ' ' + this.lastName;
      },
    },
    setterMethods: {
      fullName(value) {
        const names = value.split(' ');
        const firstName = names[0];
        const lastName = names.slice(1).join(' ');
        this.setDataValue('firstName', firstName);
        this.setDataValue('lastName', lastName);
      },
    },
  },
);

(async () => {
  await sequelize.sync();
  let user = await User.create({ firstName: 'rohan', lastName: 'hakke' });
  console.log(user.fullName); 
  user.fullName = 'Someone Else';
  await user.save();
  user = await User.findOne();
  console.log(user.firstName); 
  console.log(user.lastName); 
})();