const {MONGO_URI} = require("../config");
const mongoose = require("mongoose");
mongoose.connect(MONGO_URI);

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        minLength: 3,
        maxLength: 30,
        required: true,
        trim: true,
        unique: true
    },

    password : {
        type: String,
        required: true
    },

    firstName: {
        type: String,
        maxLength: 50,
        required: true,
        trim: true,
    },

    lastName: {
        type: String,
        maxLength: 50,
        required: true,
        trim: true,
    }
});

const User = mongoose.model("User", userSchema);

module.exports = {User}

