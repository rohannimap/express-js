const {User} = require("../models/user.model")

exports.insertUser = async(req,res)=>{
    try {
        const user = await User.create(req.body)
        res.json(user)
    } catch (error) {
        console.log(error);
    }
}

exports.getUser = async(req,res)=>{
try {
    const user = await User.findAll()
    res.json(user)
} catch (error) {
    console.log(error);
}
}