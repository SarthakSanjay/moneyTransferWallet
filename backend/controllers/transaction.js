const { Transaction } = require("../db")
const getUserTransactions = async(req,res) =>{
    const transactions = await Transaction.find({sender:req.userId})
    .populate({
        path: 'sender',
        select: '-username -password' 
      })
      .populate({
        path: 'receiver',
        select: '-username -password' 
      })
    
    res.status(200).json({transactions})
}

const getTransaction = async(req,res) =>{
    const transaction = await Transaction.find()
    res.status(200).json({transaction})
}
const deleteAll = async(req,res) =>{
    const t = await Transaction.deleteMany()
    res.status(200).json({msg:'deleted all'})
}

module.exports = {getTransaction , deleteAll ,getUserTransactions}