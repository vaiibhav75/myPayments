const express = require('express');
const router = express.Router();
const userRouter = require('./user');

router.use("/user",userRouter)
router.get ("/", async (req, res) => {
    res.json({message:"api/v1 : Working"});
})
module.exports = router;