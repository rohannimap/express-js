const task = require("../servises/task")
const logger = require("../utils/logger")


exports.createTask = async(req,res)=>{
    try{
        const data = await task.createTask(req.body)
        logger.info(`task created ${data._id}`)
        res.json(data)
    }
    catch(err){
            logger.error(err.message)
            console.log(err);
    }
}

exports.getAllTask =async (req,res)=>{
try{
    const data = await task.getAllTask()
    res.json(data)

}catch(err){
console.log(err.message);
}
}

exports.upDateTask =async (req,res)=>{
const data = await task.updateTask(req.params.id, req.body)
logger.info(`Task updated: ${data._id}`);
res.json(data);
}

exports.deleteTask = async (req,res)=>{
const data = await task.deleteTask(req.params.id)
logger.info(`Task deleted: ${req.params.id}`);
res.json({ message: 'Task deleted' });
}