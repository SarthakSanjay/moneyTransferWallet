const {User, Balance} = require('../db')
const zod = require('zod')
const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../config')
const registerDetails = zod.object({
    username : zod.string().email(),
    password : zod.string(),
    firstname: zod.string(),
    lastname : zod.string()
})
const loginDetails = zod.object({
    username : zod.string().email(),
    password : zod.string()
})
const registerUser = async(req,res) =>{
    try {
        const {username , password ,firstname ,lastname} = req.body
        // console.log(req.body);
        const {success} = registerDetails.safeParse(req.body)
        if(!success){
            return res.status(411).json({
                msg:"Email already taken / Incorrect inputs"
            })
        }
        const existingUser = await User.findOne({username:username})
        if(existingUser){
            return res.status(409).json({msg:'user already exist '})
        }
    
        const user = await User.create({
            username:username,
            password:password,
            firstname:firstname,
            lastname:lastname
        })
        
        const userId= user._id
        const token = jwt.sign({userId} ,JWT_SECRET)
    
        await Balance.create({
            userId,
            balance: 1 + Math.random() * 1000
        })
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
    } catch (error) {
        console.log(error.message);
    }

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
const updateBody = zod.object({
    password:zod.string().optional(),
    firstName:zod.string().optional(),
    lastName:zod.string().optional(),
})
const updateUser = async(req,res) =>{
    try {
        const userId = req.userId
        const {success} = updateBody.safeParse(req.body)
        console.log(req.body);
        if(!success){
            return res.status(411).json(
                {
                    message: "Error while updating information"
                }
            )
        }
        const updateObject = {}

        if (req.body.firstname) {
          updateObject.firstname = req.body.firstname
        }
    
        if (req.body.lastname) {
          updateObject.lastname = req.body.lastname
        }
    
        if (req.body.username) {
          updateObject.username = req.body.username
        }
        await User.updateOne({_id: userId} , updateObject  )
    
        res.status(200).json({
            message: "Updated successfully"
        })
    } catch (error) {
        console.log(error.message);
    }

}
const getUserDetails = async(req,res) =>{
    const user = await User.find({ _id: { $ne: req.userId } })
    if(!user){
        return res.status(404).json({msg:'no user'})
    }

    res.status(200).json({
        msg:"all user details",
        user:user
    })
}
const getUser = async(req,res) =>{
    const userId = req.userId
    const user = await User.findOne({_id : userId })
    if(!user) return res.status(404).json({msg:'user not found'})

    res.status(200).json({user})
}

const searchUser = async(req,res) =>{
    const {filter} = req.query
    let filterValue = zod.string(filter)
    if(!filterValue){
        return res.json({})
    }
    const user = await User.find({
        $and: [
            {
                $or: [
                    { firstname: { $regex: filter, $options: 'i' } },
                    { lastname: { $regex: filter, $options: 'i' } },
                ]
            },
            { _id: { $ne: req.userId } }
        ]
    }).select("-password");
    
    // console.log('user',user);
    if(!user){
        return res.json({})
    }
    res.status(200).json({user:user})
}
const deleteUser = async(req,res) =>{
   try {
     const userId = req.userId
     await User.deleteOne({_id:userId})
     res.status(200).json({'msg' : 'user deleted'})
   } catch (error) {
    console.log(error.message)
   }
}
const deleteAllUser = async(req,res)=>{
    const deleteUser = await User.deleteMany()
    res.status(200).json({msg:'deleted all user'})
}
module.exports = {registerUser ,getUserDetails , loginUser , getUser,updateUser,searchUser ,deleteAllUser , deleteUser}