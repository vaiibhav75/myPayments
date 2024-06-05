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

const accountSchema = new mongoose.Schema({
    userId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }

})

const User = mongoose.model("User", userSchema);
const Account = mongoose.model("Account", accountSchema);

module.exports = {User, Account}

