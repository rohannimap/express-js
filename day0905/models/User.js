const mongoose = require("mongoose")
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Role"
    },
    country:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Country"
    }
},
{ timestamps: true }
)

userSchema.pre("save",async function(next){
if(!this.isModified("password")) return next();
this.password = await bcrypt.hash(this.password,10);
next()
})

userSchema.methods.comparePassword = function(input){
    return bcrypt.compare(input,this.password)
}



module.exports = mongoose.model("User",userSchema)