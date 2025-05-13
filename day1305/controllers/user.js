const { sequelize } = require("../config/db");
const { User } = require("../models/user");
const { Op } = require('sequelize');
const {Post} = require("../models/post")

// const insert = async (req, res) => {
//   try {
//     // const users = await UserSchema.bulkCreate([    //1
//     //   {
//     //     name: 'rohan',
//     //     email: 'rohan@example.com',
//     //   },
//     //   {
//     //     name: 'aniket',
//     //     email: 'aniket@example.com',
//     //   },
//     //   {
//     //     name: 'nitin',
//     //     email: 'mitim@example.com',
//     //   },
//     // ]);    //1
//     // // const data = await User.findOne({where:{name:"rohan"}})   //2
//     // // const data = await User.findByPk(5)  //find by the id
//     // const data  = await User.findAll({
//     //     // where:{
//     //     //     // id:{
//     //     //     //     [Op.gt]:5
//     //     //     // }
//     //     // }
//     //             order:[['id',"DESC"]],    //sort by decsending
//     //             limit:4,    // give  4 entry
//     //             offset:2    // it skip firt 2 

//     // })      //2

//     //3 
//     // const user = await User.update({name:"anni"},{
//     //     where:{
//     //         name:"aniket"
//     //     }
//     // })

//     // const user = await User.count()
//     // const user = await User.max('id')
//     // const user = await User.min('id')
//     // const user =  await User.sum('id')
//     const user  = await User.findAll(
//         // {

//         //     attributes: ['gender', [sequelize.fn('COUNT', sequelize.col('id')), 'count']],
//         //      group: 'gender'
//         // }
//         // {    //other
//         //     // attributes:["name"]
//         //     // attributes:["username"]    // give error
//         //     attributes:[["name","username"]]
//         // }
//             {
//                 attributes:[[sequelize.fn("AVG",sequelize.col('id')),'totaluser']]
//             }  
//     )
//     //3

//     res.status(201).send(user);

//   } catch (error) {
//     console.error("Insert error:", error);
//     res.status(500).send({ error: "Error inserting users" });
//   }
// };

const findUser =async (req,res)=>{
//  const users = await User.bulkCreate([    //1
//       {
//         name: 'rohan',
//         email: 'rohan@example.com',
//       },
//       {
//         name: 'aniket',
//         email: 'aniket@example.com',
//       },
//       {
//         name: 'nitin',
//         email: 'mitim@example.com',
//       },
//     ]);

const {id} = req.params
const user = await User.findByPk(Number(id))
// const user = await User.update({name:"rohan"})


res.send(user)
}

const test =async(req,res)=>{
const post = await Post.create({ content: 'Hello everyone!' });

console.log(post.content);
console.log(post.getDataValue('content'));
}

module.exports = {findUser,test}