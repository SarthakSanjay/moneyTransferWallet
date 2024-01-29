const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const userSchema = mongoose.Schema({
    username:String,
    password:String,
    firstname:String,
    lastname:String
})
const balanceSchema = mongoose.Schema({
  userId: {
    type:mongoose.Schema.Types.ObjectId,
    ref:'User'
  },
  balance: {
    type:Number,
    default: 0
}
})
userSchema.pre('save',async function(next){
    if(!this.isModified("password")) return next()
    this.password =await bcrypt.hash(this.password , 10)
    next()
   
})
// custom method to check the password
userSchema.methods.isPassword = async function(password){
  return await bcrypt.compare(password  , this.password)
}
const User = mongoose.model('User' , userSchema)
const Balance = mongoose.model('Balance' , balanceSchema)
module.exports = {User , Balance}