const userService = require('../services/userService');

exports.CreateUser=async(req,res) =>{
 try {
    const result = await userService.createUser(req.body);
    console.log('Created User:', result);
    res.status(201).json(result);
  } catch (err) {
    console.error('Error in CreateUser:', err); 
    res.status(500).json({ error: 'Failed to create user',message:err.message });
  }
}
exports.CreateProfile=async(req,res)=> {
  const result = await userService.createProfile(req.body);
  console.log('Created Profile:', result);
  res.json(result)
}

exports.getUserWithProfile = async(req,res)=>{
  const {id}= req.params

  
const result = await userService.getUserWithProfile(Number(id))
res.json(result)
}



