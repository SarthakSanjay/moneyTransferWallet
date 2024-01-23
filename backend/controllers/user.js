const User = require('../db')
const zod = require('zod')
const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../config')
const registerDetails = zod.object({
    username : zod.string().email(),
    password: zod.string(),
    firstname: zod.string(),
    lastname:zod.string()
})
const loginDetails = zod.object({
    username: zod.string().email(),
    password: zod.string()
})
const registerUser = async(req,res) =>{
    const {username , password ,firstname ,lastname} = req.body
    const {success} = registerDetails.safeParse(req.body)
    if(!success){
        return res.status(411).json({
            msg:"Email already taken / Incorrect inputs"
        })
    }
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

    const userId= user._id
    const token = jwt.sign({userId} ,JWT_SECRET)

    if(!token){
        return res.status(500).json({
            msg:"Internal server error / issue in generating token"
        })
    }
    res.status(201).json({
        msg:'user registered successfully',
        user:user,
        token:token
    })

}
const loginUser = async(req,res) =>{
    const {success} = loginDetails.safeParse(req.body)
    const {username , password} = req.body
    if(!success){
        return res.status(411).json({
            message: "Error while logging in"
        })
    }

    const user = await User.findOne({
        username:username,
        // password:password
    })

    if(user.isPassword(password)){
        let token = jwt.sign({userId:user._id},JWT_SECRET)

        return res.json({token})
    }

    res.status(411).json({
        message:"Error while logging in"
    })

}

const updateUser = async(req,res) =>{
    const 
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
const getUser = async(req,res) =>{
    const user = await User.findOne({username : req.body.username})
    if(!user) return res.status(404).json({msg:'user not found'})

    res.status(200).json({user:user})
}

module.exports = {registerUser ,getUserDetails , loginUser , getUser}