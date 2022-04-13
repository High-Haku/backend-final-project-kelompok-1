const express = require('express');
const router = express.Router()

const {getAllTransaction, getTransactionByID, addTransaction, deleteTransactionByID, updateTransactionByID} = require('../controllers/transactions.controller');

router.get("/", getAllTransaction);
router.get("/:id", getTransactionByID);
router.get("/:id", deleteTransactionByID);
router.post("/", addTransaction);
router.post("/:id", updateTransactionByID);

module.exports = router