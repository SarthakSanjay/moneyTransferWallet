const express = require('express')
const { registerUser, getUserDetails ,loginUser, getUser, updateUser,searchUser, deleteAllUser } = require('../controllers/user')
const { authMiddlware } = require('../middleware/authMiddleware')
const { getTransaction, deleteAll, getUserTransactions } = require('../controllers/transaction')
const router = express.Router()

router.route('/register').post(registerUser)
router.route('/login').post(loginUser)
router.route('/all').get(authMiddlware,getUserDetails).delete(deleteAllUser)
router.route('/detail').get(authMiddlware , getUser)
router.route('/update').put(authMiddlware,updateUser)
router.route('/bulk').get(authMiddlware,searchUser)
router.route('/transaction').get(authMiddlware,getUserTransactions)
router.route('/transaction/all').delete(deleteAll).get(getTransaction)
module.exports = router