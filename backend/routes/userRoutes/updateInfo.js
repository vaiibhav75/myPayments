const express = require('express');
const router = express.Router();
const zod = require('zod');
const { User } = require("../../database/db");
const { authMiddleware } = require('../../middleware/authorization');
const bcrypt = require("bcrypt");

const updateBody = zod.object({
    password: zod.string().min(6).optional(),
    firstName: zod.string().max(50).optional(),
    lastName: zod.string().max(50).optional()
});

router.put("/update", authMiddleware, async (req, res) => {
    const parsedResult = updateBody.safeParse(req.body);
    if (!parsedResult.success) {
        return res.status(400).json({
            message: "Invalid update information"
        });
    }

    try {
        const updateData = { ...parsedResult.data };
        if (updateData.password) {
            updateData.password = await bcrypt.hash(updateData.password, 10);
        }

        await User.updateOne({ _id: req.userId }, updateData);
        const user = await User.findById(req.userId);
        return res.status(200).json({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            token: req.headers.authorization.split(" ")[1]
        });
    } catch (error) {
        return res.status(500).json({
            message: "An error occurred while updating the user information."
        });
    }
});

module.exports = router;
