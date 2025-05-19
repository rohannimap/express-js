
const logger = (req,res,next)=>{
    console.log(`${new Date().toISOString()},and the ${req.method},and ${req.url}`);
    next()
}
 

module.exports = logger