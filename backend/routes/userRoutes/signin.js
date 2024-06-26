const express = require('express');
const router = express.Router();
const zod = require("zod");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');

const {User} = require("../../database/db");
const { JWT_SECRET } = require("../../config");

// Zod Schema
const signInBody = zod.object({
    username: zod.string().email().min(3).max(30),
    password: zod.string().min(6)
})


router.post("/signin", async (req,res) => {

    // zod verification
    const {success} = signInBody.safeParse(req.body);
    if (!success) {
        return res.status(411).json({message: "Invalid inputs"});
    }

    // Verifying existence
    const user = await User.findOne({
        username: req.body.username
    })
    if (!user) {
        return res.status(411).json({message: "User does not exist"});
    }

    const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
    if (!isPasswordValid) {
        return res.status(411).json({message: "Wrong Password"});
    }

    const userId = user._id.toString();
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
