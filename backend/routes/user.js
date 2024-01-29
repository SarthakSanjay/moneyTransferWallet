const express = require('express')
const { registerUser, getUserDetails ,loginUser, getUser, updateUser,searchUser, deleteAllUser } = require('../controllers/user')
const { authMiddlware } = require('../middleware/authMiddleware')
const router = express.Router()

router.route('/register').post(registerUser)
router.route('/login').post(loginUser)
router.route('/all').get(getUserDetails).delete(deleteAllUser)
router.route('/email').get(authMiddlware , getUser)
router.route('/').put(authMiddlware,updateUser)
router.route('/bulk').get(searchUser)
module.exports = router