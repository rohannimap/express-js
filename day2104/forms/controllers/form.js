const formModel = require("../models/form")
const path = require("path")


exports.getForm = (req,res)=>{
    res.sendFile(path.resolve(__dirname, '../views/form.html'));
}


exports.submitForm = async (req,res)=>{
    const {name,email,message}=req.body
    const saveForm = new formModel({name,email,message})
    await saveForm.save();
    res.send("form submited")
}