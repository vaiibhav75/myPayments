const express = require('express');
const router = express.Router();

const balanceRouter = require('./accountRoutes/checkBalance');
const transferRouter = require('./accountRoutes/transferMoney');

router.get ("/", async (req, res) => {
    res.json({message:"api/v1/account: Working"});
})

router.use(balanceRouter);
router.use(transferRouter);

module.exports = router;