const express = require('express');
const router = express.Router();
const zod = require('zod');
const {User} = require("../../database/db");
const {authMiddleware} = require('../../middleware/authorization')
const bcrypt = require("bcrypt");


const updateBody = zod.object({
    password: zod.string().min(6).optional(),
    firstName: zod.string().max(50).optional(),
    lastName: zod.string().max(50).optional()
})
router.put("/update", authMiddleware, async (req,res) => {
    const { success } = updateBody.safeParse(req.body);
    if (!success) {
        res.status(411).json({
            message: "Invalid update information"
        })
    }

    if (req.body.password) {
        req.body.password = await bcrypt.hash(req.body.password, 10);
    }



    await User.updateOne({_id:req.userId}, req.body);

    return res.status(200).json({
        message: "Updated successfully"
    })
})


module.exports = router;