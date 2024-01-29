const express = require('express')
const { authMiddlware } = require('../middleware/authMiddleware')
const { balance, getAllBalance , transfer} = require('../controllers/account')
const router = express.Router()

router.route('/balance').get(authMiddlware , balance )
router.route('/transfer').post(authMiddlware,transfer)
router.route('/all').get(getAllBalance)
module.exports = router
