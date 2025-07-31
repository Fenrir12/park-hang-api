const express = require('express')
const router = express.Router()
const { getNearbyPinsController } = require('../controllers/parkController')

/**
 * @swagger
 * /v1/pins/nearby:
 *   get:
 *     tags: [Pins]
 *     summary: Get nearby parks based on location
 *     description: Returns a list of parks near the provided geolocation within a specified radius.
 *     parameters:
 *       - in: query
 *         name: lat
 *         required: true
 *         schema:
 *           type: number
 *         description: Latitude of the current location
 *         example: 45.5017
 *       - in: query
 *         name: lng
 *         required: true
 *         schema:
 *           type: number
 *         description: Longitude of the current location
 *         example: -73.5673
 *       - in: query
 *         name: radius
 *         required: true
 *         schema:
 *           type: number
 *         description: Search radius in meters
 *         example: 1000
 *     responses:
 *       200:
 *         description: List of nearby parks returned successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object  # Replace with actual park pin schema if defined
 *       400:
 *         description: Missing or invalid query parameters
 */
router.get('/nearby', getNearbyPinsController)

module.exports = router
