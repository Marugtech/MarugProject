const jwt = require('jsonwebtoken');
const { errorHandler } = require('./error');

const verifyToken = (req,res,next)=>{
   const token = req.cookies.auth_token;
   if(!token) return next(errorHandler(401, "You are Not authroised"))
   jwt.verify(token, process.env.TOKEN_KEY, (err,user)=>{
        if(err) return next(errorHandler(401, "Token not valid"))
        req.user = user;
        next();
   })
}

module.exports = verifyToken