const transactions = require('./models/transactions.models');

module.exports = {
  getAllTransaction: (req, res) => {
    res.json({
      message: "berhasil mengambil data transaksi",
      data: transactions
    })
  },

  getTransactionByID: (req, res) => {
    const { id } = req.params
  
    const transaction = transactions.find(item => item.id == id )
  
    res.json({
      message: "berhasil mengambil data transaksi by id",
      data: transaction
    })
  },

  addTransaction:  (req, res) => {
    const data = req.body
  
    transactions.push(data)
    res.json({
      message: "success add data movies",
      data
    })
  },

  deleteTransactionByID: (req, res) => {
    const { id } = req.params
  
    const transaction = transactions.filter(item => item.id != id )
  
    res.json({
      message: "berhasil menghapus data transaksi by id",
      data: transaction
    })
  },

  updateTransactionByID: (req,res) => {
    const {objectId} = req.params.id
    const {newAddTransaction} = req.params.body
    const transaction = transactions.findOneAndUpdate({ _id: objectId }, {$set: newAddTransaction})
    res.json ( {
      message: "berhasil mengupdate data transaksi by id",
      data: transaction,
    }
    )
  }
}