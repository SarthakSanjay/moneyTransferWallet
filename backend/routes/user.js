const express = require('express')
const { registerUser, getUserDetails } = require('../controllers/user')
const router = express.Router()

router.post('/register',registerUser)
router.get('/all',getUserDetails)

module.exports = router