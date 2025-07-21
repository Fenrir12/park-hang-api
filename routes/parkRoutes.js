const express = require('express');
const router = express.Router();
const { getNearbyParks } = require('../controllers/parkController');

router.get('/nearby', getNearbyParks);

module.exports = router;