const mongoose = require("mongoose")

const joke = new mongoose.Schema({
    setup:{
        type:String
    },

  punchline:{
  type:String
  },
  
  type:{
    type:String
  }
})

module.exports = mongoose.model("Joke",joke)