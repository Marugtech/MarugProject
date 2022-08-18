const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');

//DB Connection
mongoose.connect(process.env.DB_URL)
.then(()=>{
    console.log("Databse Connected Successfully...!!!");
}).catch((err)=>{
    console.log("Db Connection Error");
})



app.listen(8000, ()=>{
    console.log('server is running 8000');
})