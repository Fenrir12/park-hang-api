const express = require('express')
const router = express.Router()
const { checkInToPark } = require('../controllers/checkinController')

router.post('/:parkId', checkInToPark)

module.exports = router
