const std = require("../models/student")

exports.dummylink=(req,res)=>{
res.send("this is dumy page")
}

exports.createSudent=async (req,res)=>{
    const {name,age}= req.body;
   const respose = await std.create({name,age})
   res.json(respose)
}

exports.getStudent = async (req,res) =>{
    const student = await std.find({})
    res.json(student)
}

exports.getStudentById = async (req,res) =>{
    const {name} = req.params;
    const student = await std.find({name})
    
    res.json(student)
}

exports.updateStudent = async(req,res)=>{
    const {id} = req.params;
    const {name,age} = req.body;
    console.log(id,name,age);
    const updated = await std.findByIdAndUpdate(id,{name,age},{new :true}) 
    res.json(updated)
}

exports.updateStudent = async(req,res)=>{
    const {id} = req.params;
    const {name,age} = req.body;
    console.log(id,name,age);
    const updated = await std.findByIdAndUpdate(id,{name,age},{new :true}) 
    res.json(updated)
}

exports.checkage=async (req,res)=>{
    console.log(req.params);
    const {agen} = req.params;
    const data = await std.find({age:{$gt:agen}})
    // const data = await std.find({age:{$nin:[20,21,22,23,24,25,26,27,28]}})
    res.json( data )
}
exports.logicalOperator=async(req,res)=>{
const data = await std.find({$and:[{age:{$gt:20}},{age:{$lt:30}}]})
res.json(data)
}
















