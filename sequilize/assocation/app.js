const express = require('express')
const app = express()
const port = 3000
const { User, Profile } = require('./models'); 
const bodyParser = require("body-parser")
const {conncetDB}= require("./models/index")
const userRoutes = require('./routes/userRoute');
const {sequelize} = require('./config/db');
app.use(bodyParser.json())
app.use('/api', userRoutes);


// await sequelize.sync(); 
conncetDB()
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, async () => {
  await sequelize.sync(); //
  console.log(`Example app listening on port ${port}!`);
});