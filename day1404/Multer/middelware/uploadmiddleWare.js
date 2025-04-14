const multer = require("multer")
const path = require("path")


// const fs = require('fs');
// //if file not
// const uploadDir = 'uploads';
// if (!fs.existsSync(uploadDir)) {
//   fs.mkdirSync(uploadDir);
// }

const storage = multer.diskStorage({
    destination:function(req,file,cb){
     cb(null,"./uploads")
    },
    filename:function(req,file,cb){
        cb(null, Date.now() + path.extname(file.originalname));     //extname is the use for the take file extention
    }
})

const upload = multer({storage})
module.exports = upload