const express = require('express');
const {registerUser, loginUser,authUser} = require('../controllers/userController');
const verifyToken = require('../verifyToken');
const router = express.Router();

//Register User

router.post("/signup", registerUser);
router.post("/signin", loginUser);
router.get("/authuser", verifyToken,authUser)

module.exports = router;