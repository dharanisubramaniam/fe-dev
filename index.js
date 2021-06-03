const express = require("express");
const cors = require('cors');



const app = express();

app.use(cors());

const mongooseDB = require('./config/db');

//connect db
mongooseDB();

//middleware initiation
//extended false - no nested objects {name:{username:"dhar"}}
app.use(express.json({extended:false}))

const PORT = process.env.PORT || 5000

app.get('/',(req,res)=>{res.send("API running")})

//define routes
//app.use registers the middleware in order of sequence
app.use('/api/category',require('./api/category'));
app.use('/api/course',require('./api/course'));
// app.use('/api/profile',require('./routes/api/profile'));
app.use('/api/skill',require('./api/skill'));

app.listen(PORT,()=>console.log(`server listening on ${PORT}`))
