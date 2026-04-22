const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    user_name: {
        type: String,
        required: true,
        unique: true
    },
    user_email: {
        type: String,
        required: true,
        unique: true
    },
    user_password: {
        type: String,
        required: true,
    },
    role:{
        type:String,
        enum:['user', 'artist'],
        default:'user'
    }
})

const userModel = mongoose.model("user",userSchema)

module.exports = userModel