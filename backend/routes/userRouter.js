const express = require('express');
const router = express.Router();

const signInRouter = require("./userRoutes/signin");
const signUpRouter = require("./userRoutes/signup");
const updateRouter = require("./userRoutes/updateInfo");
const searchRouter = require("./userRoutes/searchUsers");

router.get ("/", async (req, res) => {
    res.json({message:"api/v1/user: User Working"});
})

router.use ("/signin", signInRouter);
router.use("/signup", signUpRouter);
router.use("/update", updateRouter);
router.use("/bulk", searchRouter);


module.exports = router;