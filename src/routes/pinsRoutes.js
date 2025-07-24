const express = require('express')
const router = express.Router()
const { getNearbyPins } = require('../controllers/parkController')

/**
 * @swagger
 * /nearby:
 *   get:
 *     summary: Find nearby parks
 *     description: >
 *       Find parks near a given longitude/latitude within a certain radius (in meters).
 *     tags:
 *       - Parks
 *     parameters:
 *       - in: query
 *         name: lng
 *         required: true
 *         schema:
 *           type: number
 *         description: Longitude of the center point
 *       - in: query
 *         name: lat
 *         required: true
 *         schema:
 *           type: number
 *         description: Latitude of the center point
 *       - in: query
 *         name: radius
 *         required: true
 *         schema:
 *           type: number
 *         description: Search radius in meters
 *     responses:
 *       200:
 *         description: List of nearby parks (pins)
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Pin'
 *       400:
 *         description: Missing query parameters
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Please provide lng, lat, and radius query parameters
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Server error
 */
router.get('/nearby', getNearbyPins)

module.exports = router
