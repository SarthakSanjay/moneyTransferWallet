const User = require('../db')
const zod = require('zod')
const registerUser = async(req,res) =>{
    const {username , password , firstname , lastname} = req.body
    const existingUser = await User.findOne({username:username})
    if(existingUser){
        return res.status(200).json({msg:'user already exist '})
    }

    const user = await User.create({
        username:username,
        password:password,
        firstname:firstname,
        lastname:lastname
    })

    res.status(201).json({
        msg:'user registered successfully',
        user:user
    })

}

const getUserDetails = async(req,res) =>{
    const user = await User.find()
    if(!user){
        return res.status(404).json({msg:'no user'})
    }
    res.status(200).json({
        msg:"all user details",
        user:user
    })
}

module.exports = {registerUser ,getUserDetails}