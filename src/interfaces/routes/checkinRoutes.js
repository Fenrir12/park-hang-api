const express = require('express')
const router = express.Router()
const { checkInToPark } = require('../controllers/checkInController')
const { verifyAuth } = require('../middleware/authMiddleware')

/**
 * @swagger
 * /v1/check-in/{parkId}:
 *   post:
 *     tags: [Check-In]
 *     summary: Check in to a park
 *     description: Registers the user as checked in at the specified park.
 *     parameters:
 *       - in: path
 *         name: parkId
 *         required: true
 *         description: ID of the park to check into
 *         schema:
 *           type: string
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successfully checked in
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 checkInId:
 *                   type: string
 *                 isAnonymous:
 *                   type: boolean
 *                 currentPark:
 *                   type: object
 *                   description: Park details
 *                 timestamp:
 *                   type: string
 *                   format: date-time
 *       400:
 *         description: BadRequest
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: NotFound
 */
router.post('/:parkId', verifyAuth, checkInToPark)

module.exports = router
