const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username : {
        type: String,
        unique: true,
        required: true
    },
    email : {
        type: String,
        required: true,   
        unique: true
    },
    phone: {
        type: Number,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
},{timestamps: true})


module.exports = mongoose.model('Users', userSchema)