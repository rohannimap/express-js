exports.uploadfile = (req,res)=>{
res.status(200).json({message:"file uploded!",file:req.file})
}