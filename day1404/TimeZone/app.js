const express = require('express');
const timeRoutes = require('./routes/time');

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/api/time', timeRoutes);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});

app.get ("/",(req,res)=>{
res.send("this is the home page")
})