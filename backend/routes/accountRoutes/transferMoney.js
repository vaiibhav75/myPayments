
const mongoose = require("mongoose");
const express = require('express');
const router = express.Router();
const {Account} = require("../../database/db");
const {authMiddleware} = require('../../middleware/authorization')

router.post("/transfer", authMiddleware, async (req,res) => {
    const session = await mongoose.startSession();
    await session.startTransaction();

    try {
        const {to,amount} = req.body;
        const from = req.userId;

        const fromAccount = await Account.findOne({userId:from}).session(session);
        const toAccount = await Account.findOne({userId:to}).session(session);

        if (!fromAccount || !toAccount || fromAccount.balance < amount || amount < 0) {
            await session.abortTransaction();
            if (!fromAccount) return res.status(400).json({message: "Invalid account"});
            if (!toAccount) return res.status(400).json({message: "Invalid receiver"});
            return res.status(400).json({message: "Insufficient balance"});
        }

        await Account.updateOne({userId: from},{$inc : {balance: -amount}}).session(session);
        await Account.updateOne({userId: to},{$inc : {balance: amount}}).session(session);
        await session.commitTransaction();

        return res.status(200).json({
            message: "Transfer successful"
        });
    } catch (error) {
        return res.status(400).json({message:"Unexpected error occured"})
    } finally {
        await session.endSession();
    }



})

module.exports = router;