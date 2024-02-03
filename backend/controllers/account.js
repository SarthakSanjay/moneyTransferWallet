const { default: mongoose } = require('mongoose');
const {Balance , User, Transaction} = require('../db')
const balance = async(req,res)=>{
    try {
        const userId = req.userId
        // console.log("this is userId ",userId);
        const account = await Balance.findOne({userId:userId})
        // console.log('account',account);
        if(!account){
            return res.json({})
        }
        res.status(200).json({balance:account.balance})
    } catch (error) {
        console.log(error.message);
    }
}
const getAllBalance = async(req,res) =>{
    const balances = await Balance.find()
    res.status(200).json({balance:balances})
}

// const transfer = async(req,res) =>{
//   try {
//       const selfId = req.userId
//       console.log('self id ',selfId);
//       const {userId ,amount} = req.body
//       const user = await User.findById({_id:userId})
//       if(!user){
//           return res.json({})
//       }
//       const myBalance = await Balance.findOne({userId:selfId})
//       console.log('my bal ',myBalance.balance);
//       if(myBalance.balance > 0 || myBalance.balance > amount){
//           const updateUserBalance = await Balance.updateOne({userId:userId },{ $inc: { balance: +amount } })
//           const updateSelfBalance = await Balance.updateOne({userId:selfId },{ $inc: { balance: -amount } })
  
//           res.status(200).json({
//               msg:"transaction successfull",
//               userBalance : updateUserBalance,
//               selfBalance : updateSelfBalance
//           })
//       }else{
//           res.status(400).json({
//               message: "Insufficient balance"
//           })
//       }
//       res.status(400).json({
//           message: "Invalid account"
//       })
//   } catch (error) {
//     console.log(error.message)
//   }
    

// }
//we should use mongoose session to avoid any transaction failure
const transfer = async(req,res)=>{
    const session = await mongoose.startSession()
    session.startTransaction()

    const {userId , amount} = req.body
    const payeeAccount = await Balance.findOne({userId : req.userId}).session(session)
    if (!payeeAccount || payeeAccount.balance < amount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Insufficient balance"
        });
    }

    const receiverAccount = await Balance.findOne({userId:userId}).session(session)
    if (!receiverAccount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Invalid account"
        });
    }

    // Perform the transfer
    await Balance.updateOne({ userId: req.userId }, { $inc: { balance: -amount } }).session(session);
    await Balance.updateOne({ userId: userId }, { $inc: { balance: amount } }).session(session);

    // Commit the transaction
     await Transaction.create({
        sender:req.userId,
        receiver:userId,
        amount:amount
    })
    await session.commitTransaction();

    res.json({
        message: "Transfer successful"
    });
}
module.exports = {balance,getAllBalance , transfer}