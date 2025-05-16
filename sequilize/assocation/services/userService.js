const { sequelize } = require('../config/db');
const {QueryTypes} = require("sequelize")
const { User, Profile } = require('../models');

async function createUser(data) {
  const user = await User.create(data);
  return user;
}

async function createProfile(data) {
    const profile = await Profile.create(data);
  return profile ;
}

async function getUserWithProfile(n){
  n = Number(n);
  // return await User.findOne({
  //   where:{id},
  //   include:Profile,
  //   attributes:["name","profile.bio"
      
  //   ]
  // })
  const [name] = await sequelize.query("SELECT id,name FROM users WHERE id = :id",{
    replacements:{id:n},
    type: sequelize.QueryTypes.SELECT
})
return `the name is the ${name.name}`
}


module.exports = {
  createUser,
  createProfile,
  getUserWithProfile,
};
