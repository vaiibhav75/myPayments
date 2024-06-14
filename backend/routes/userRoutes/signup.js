const express = require('express');
const router = express.Router();
const zod = require("zod");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');

const {User, Account} = require("../../database/db");
const { JWT_SECRET } = require("../../config");

// Zod Schema
const signupBody = zod.object({
    username: zod.string().email().min(3).max(30),
    password: zod.string().min(6),
    firstName: zod.string().max(50),
    lastName: zod.string().max(50)
})


router.post("/signup", async (req,res) => {

    // zod verification
    const {success} = signupBody.safeParse(req.body);
    if (!success) {
        return res.status(411).json({message: "Invalid inputs"});
    }

    // Avoiding duplicate users
    const userAlreadyExists = await User.findOne({
        username: req.body.username
    })
    if (userAlreadyExists) {
        return res.status(411).json({message: "User Already Exists"});
    }

    // Database Entry
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = await User.create({
        username: req.body.username,
        password: hashedPassword,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    })

    // Database failures
    if (!user) {
        return res.status(500).json({message: "Database Failure"});
    }

    const userId = user._id.toString();
    await Account.create({
        userId,
        balance: Math.floor(1 + Math.random() * 100000)
    })

    const token = jwt.sign(userId, JWT_SECRET);
    return res.status(200).json({
        message: "User logged in successfully",
        token: token,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName
    })

})

module.exports = router;