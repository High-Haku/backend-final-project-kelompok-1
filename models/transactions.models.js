const mongoose = require("mongoose");

const transactions = new mongoose.Schema({
  userID: {
      type: mongoose.Schema.Types.ObjectId,
       ref: 'User',
    },
   purchaseDate: {
       type: Date,
       required: true,
   }


});

mongoose.model("Transaction", transactions);
module.exports = transactions;