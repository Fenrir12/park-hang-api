const express = require('express')
const router = express.Router()
const { getParkByIdListController } = require('../controllers/parkController')

router.post('/', getParkByIdListController)

module.exports = router
