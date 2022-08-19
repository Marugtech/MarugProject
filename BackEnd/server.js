const express = require('express');
const app = express();
const userRouter = require('./routers/userRoute');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');

//DB Connection
mongoose.connect(process.env.DB_URL)
.then(()=>{
    console.log("Databse Connected Successfully...!!!");
}).catch((err)=>{
    console.log("Db Connection Error");
})
//middleware
app.use(express.json());
app.use(cors());
app.use("/api", userRouter)
app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on ${process.env.PORT}`);
})