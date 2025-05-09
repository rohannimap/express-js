const authService = require('../services/auth.service');

exports.register =async (req,res)=>{
    const {email,password} = req.body
    try{
        const data = await authService.register(email,password)
        res.json(data)
    }
    catch(err){
        console.log(err.message);
        
    }
};
exports.login = async (req,res)=>{
    const {email,password} = req.body
    try{
        const data = await authService.login(email,password);
        res.json(data)
    }
    catch(err){
        console.log(err.message);
        
    }

};
