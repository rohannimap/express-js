const User = require('../models/user.model');
const token = require('../utils/jwt');


exports.register =async (email,password)=>{
    // console.log(email);
    
    try{
        const isuser = await User.findOne({email})
        if(isuser) throw {message:"user alredy avil"}
        
        const user = await User.create({email,password})
        return { token: token.cerateToken(user) };

    }
    catch(err){
            console.log(err.message);
            
    }
}


exports.login = async (email, password) => {
    const user = await User.findOne({ email });
    // console.log(user);
    
    if (!user || !(await user.comparePassword(password)))
      throw { status: 401, message: 'Invalid credentials' };
  
    return { token: token.cerateToken(user) };
  };
  