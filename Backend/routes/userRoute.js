const express = require('express');
const registerUser = require('../controllers/userController');
const router = express.Router();

//Register User

router.post("/signup", registerUser)


module.exports = router;