const axios = require("axios")
const Joke = require("../models/joke")

exports.saveJoke =async (req,res)=>{
const respose = await axios.get('https://official-joke-api.appspot.com/random_joke')
const jokedata = respose.data;
const joke = new Joke({
    setup:jokedata.setup,
    punchline:jokedata.punchline,
    type:jokedata.type

})
await joke.save();
res.json("this is the data",joke)
}
