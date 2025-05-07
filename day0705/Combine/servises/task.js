const Task = require("../models/task")

exports.createTask = async(data)=>{
    const insertData = new Task(data)
    await insertData.save()
    return insertData;
};

exports.getAllTask = async () =>{
return await Task.find()
}

exports.updateTask = async(id,data)=>{
return await Task.findByIdAndUpdate(id,data,{new:true}) 
}

exports.deleteTask =async (id)=>{
    return await Task.findByIdAndDelete(id)
}

exports.getPendingTask = async()=>{
return await Task.find({completed:false})
}


