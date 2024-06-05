const express = require('express');
const router = express.Router();

const userRouter = require('./userRouter');
const accountRouter = require("./accountRouter");

router.use("/user",userRouter);
router.use("/account", accountRouter);
router.get ("/", async (req, res) => {
    res.json({message:"api/v1 : Working"});
})
module.exports = router;