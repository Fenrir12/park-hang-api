const express = require('express')
const router = express.Router()
const { getParkByIdListController } = require('../controllers/parkController')

/**
 * @swagger
 * /v1/parks:
 *   post:
 *     tags: [Parks]
 *     summary: Retrieve parks by a list of IDs
 *     description: Returns details for a list of park IDs provided in the request body.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - parkIds
 *             properties:
 *               parkIds:
 *                 type: array
 *                 description: Array of park IDs
 *                 items:
 *                   type: string
 *                 example: ["abc123", "xyz456"]
 *     responses:
 *       200:
 *         description: List of parks found
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object  # Replace with actual Park schema reference if defined
 *       400:
 *         description: Invalid request payload
 */
router.post('/', getParkByIdListController)

module.exports = router
