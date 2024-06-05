const express = require('express');
const router = express.Router();
const {User} = require("../../database/db");

router.get("/bulk", async (req,res) =>{
    const filter = req.query.filter || "";
    const matchingUsers = await User.find({
        $or: [
            {
                firstName: {
                    $regex:filter,
                    $options: 'i'
                }
            },
            {
                lastName: {
                    $regex:filter,
                    $options: 'i'
                }
            }
        ]
    });


    res.status(200).json({
        users: matchingUsers.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })
})

module.exports = router;
