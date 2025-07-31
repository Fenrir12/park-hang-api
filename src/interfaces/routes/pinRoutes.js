const express = require('express')
const router = express.Router()
const { getNearbyPinsController } = require('../controllers/parkController')

router.get('/nearby', getNearbyPinsController)

module.exports = router
