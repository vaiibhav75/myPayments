const express = require('express');
const router = express.Router();
const {Account} = require("../../database/db");
const {authMiddleware} = require('../../middleware/authorization')

router.get("/balance", authMiddleware, async (req, res) => {
    const account = await Account.findOne({
        userId: req.userId
    })

    if (!account) {
        return res.status(400).json({
            message: "Unexpected Error"
        })
    }

    res.status(200).json({
        balance: account.balance
    })
})

module.exports = router;