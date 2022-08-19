const mongoose = require('mongoose');
const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const { errorHandler } = require('../error');

const registerUser = async(req,res,next)=>{
    try {
         const hashPassword = await bcrypt.hash(req.body.password, 7);
         const newUser = new userModel({...req.body, password: hashPassword});
         const existUser = await userModel.findOne({email:req.body.email})
         if(existUser) return next(errorHandler(400, "Email  Already exists"));
         const phoneNumber = await userModel.findOne({phone: req.body.phone});
         if(phoneNumber) return next(errorHandler(401, "Phone Number Already exists"))
         const userSave = await newUser.save();
         res.status(200).json({
            msg: "User Registerd successfully",
            data: userSave
         })
         
    } catch (error) {
         next(errorHandler(401,"Internal server error"))
    }
}

module.exports = registerUser;