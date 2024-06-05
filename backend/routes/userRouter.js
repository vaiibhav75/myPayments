const express = require('express');
const router = express.Router();

const signInRouter = require("./userRoutes/signin");
const signUpRouter = require("./userRoutes/signup");
const updateRouter = require("./userRoutes/updateInfo");
const searchRouter = require("./userRoutes/searchUsers");

router.get ("/", async (req, res) => {
    res.json({message:"api/v1/user: Working"});
})

router.use(signInRouter);
router.use(signUpRouter);
router.use(updateRouter);
router.use(searchRouter);


module.exports = router;