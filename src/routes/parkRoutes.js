const express = require('express')
const router = express.Router()
const { getParkByIdList } = require('../controllers/parkController')

router.post('', getParkByIdList)

module.exports = router
