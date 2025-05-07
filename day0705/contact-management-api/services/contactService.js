const Contact  = require("../models/Contact")

exports.createContact = async(data)=>{
    return await new Contact(data).save()
}

exports.getContact =async (userID)=>{
return await Contact.find({owner:userID})
}

exports.updateContact = async (userId,data)=>{
return await Contact.findByIdAndUpdate(userId,data,{new :true})
}

exports.deleteContact  = async(userId)=>{
return await Contact.findByIdAndDelete(userId)
}