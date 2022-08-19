const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRoute = require('./routes/userRoute');
require('dotenv').config();
const cookieParser = require('cookie-parser');

//Db Connection

mongoose.connect(process.env.DB_URL)
.then(()=>{
    console.log("Db Connected successfully..");
}).catch((err)=>{
    console.log("Db Error in connection");
})



//middlewares 
app.use(cookieParser());
app.use(express.json());
app.use('/api/users', userRoute);

//Error Handling

app.use((err,req,res,next)=>{
    const status = err.status || 500;
    const message = err.message || "Something went wrong";
    return res.status(status).json({
        success: false,
        status,message
    })
})

//Server Config
app.listen(process.env.PORT, ()=>{
    console.log("Server is running on" , process.env.PORT);
})