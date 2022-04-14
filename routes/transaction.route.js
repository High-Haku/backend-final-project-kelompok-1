const express = require('express');
const router = express.Router()

const {getAllTransaction, getTransactionById, addTransaction, deleteTransactionById, updateTransactionById} = require('../controllers/transactions.controller');

router.get("/", getAllTransaction);
router.get("/:id", getTransactionById);
router.delete("/:id", deleteTransactionById);
router.post("/", addTransaction);
router.post("/:id", updateTransactionById);

module.exports = router;