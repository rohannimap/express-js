const validUser =(req,res,next)=>{
        const {name,email} = req.body
        if(!name || !email){
            res.json("email and name is required")
        }

        next()
}

module.exports = validUser