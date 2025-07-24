const express = require('express')
const router = express.Router()
const { getNearbyPins } = require('../controllers/parkController')

router.get('/nearby', getNearbyPins)

module.exports = router
