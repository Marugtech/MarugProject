const express = require('express');


const app = express();

app.get("/", (req,res)=>{
    res.send("im working from Local")
})


app.listen(8000, ()=>{
    console.log('server is running 8000');
})