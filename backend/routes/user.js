const express = require('express')
const { registerUser, getUserDetails ,loginUser, getUser } = require('../controllers/user')
const { authMiddlware } = require('../middleware/authMiddleware')
const router = express.Router()

router.post('/register',registerUser)
router.post('/login',loginUser)
router.get('/all',getUserDetails)
router.get('/email',authMiddlware , getUser)

module.exports = router