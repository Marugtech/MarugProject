const router = require('express').Router();
const {userRegister} = require("../controllers/userController")


router.post("/register",userRegister)

module.exports = router;