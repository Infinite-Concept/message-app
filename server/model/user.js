const mongoose = require("mongoose");

const userScheme = new mongoose.Schema({
    phoneNumber: {
        type: String,
        require: true,
        unique: true
    },
    username: {
        type: String,
    },
    profilePic: {
        type: String
    },
    email: {
        type: String
    },
    website: {
        type: String
    },
    bio: {
        type: String
    },
    cover: {
        type: String
    },
    verifyCode: {
        type: String
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("user", userScheme)