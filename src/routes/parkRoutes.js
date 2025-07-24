const express = require('express')
const router = express.Router()
const { getParkByIdList } = require('../controllers/parkController')

/**
 * @swagger
 * /:
 *   post:
 *     summary: Get parks by list of IDs
 *     description: >
 *       Find and return parks matching a list of provided IDs,
 *       optionally limiting the number of results.
 *     tags:
 *       - Parks
 *     parameters:
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         required: false
 *         description: Maximum number of parks to return (default 30)
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - parksIds
 *             properties:
 *               parksIds:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: ["park123", "park456"]
 *     responses:
 *       200:
 *         description: List of matching parks
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Park'
 *       400:
 *         description: Missing or invalid parksIds
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Please provide parks idList parameter
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
router.post('', getParkByIdList)

module.exports = router
