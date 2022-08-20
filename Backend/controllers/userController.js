const mongoose = require('mongoose');
const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const { errorHandler } = require('../error');
const jwt = require('jsonwebtoken');


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

//Login user 

const loginUser = async (req,res,next)=>{
       try {
          const {email,phone,password} = req.body;
          const userEmail= await userModel.findOne({email: email});
          if(!userEmail) return next(errorHandler(401, "Email not exists register now"))
          const userPhone = await userModel.findOne({phone: phone});
          if(!userPhone) return next(errorHandler(401, "Phone not exists"));
          const validPassword = await bcrypt.compare(password, userEmail.password);
          if(!validPassword) return next(errorHandler(401, "Not a valid password"));

           //Authetication

         const token = jwt.sign({id:userEmail._id}, process.env.TOKEN_KEY, {expiresIn: "1d"});
         res.cookie("auth_token", token, {
          httpOnly : true,
         }).status(200)
          res.status(200).json("Logged in successfully")
       } catch (error) {
          next(errorHandler(401, "Internal Server Error"))
       }
}


const authUser = async (req,res,next)=>{
   try {
      res.send("I am authorized user")
   } catch (error) {
      next(errorHandler(501, "Something went wrong"))
   }
}

module.exports = {registerUser, loginUser, authUser};