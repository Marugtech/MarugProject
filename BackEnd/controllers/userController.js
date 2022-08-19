const express = require('express');
const userModel = require('../Models/userModel');
const bcrypt = require('bcrypt');


const userRegister = async (req,res)=>{
    res.json("Hi im okay")
}


module.exports = {
    userRegister
}