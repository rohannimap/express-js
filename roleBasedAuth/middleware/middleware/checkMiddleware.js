const checkMiddleware = (req,res,next)=>{
        const {name,email} = req.body
        console.log(name,email);
next()
}

module.exports =checkMiddleware