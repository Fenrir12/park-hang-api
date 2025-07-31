const express = require('express')
const router = express.Router()
const {
  createHangoutForUserInPark,
  getHangoutsByParkId,
} = require('../controllers/hangoutController')
const { requireAuth } = require('../middleware/authMiddleware')

/**
 * @swagger
 * /v1/hangouts:
 *   post:
 *     tags: [Hangouts]
 *     summary: Create a new hangout in a park
 *     description: Allows an authenticated user to create a hangout at a specific park. The user must be checked into the park.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - parkId
 *               - title
 *             properties:
 *               parkId:
 *                 type: string
 *                 description: ID of the park where the hangout takes place
 *                 example: "abc123"
 *               title:
 *                 type: string
 *                 description: Title or activity of the hangout
 *                 example: "Pickup basketball game"
 *               description:
 *                 type: string
 *                 description: Optional description of the hangout
 *                 example: "Looking for 3v3. Beginners welcome!"
 *     responses:
 *       200:
 *         description: Hangout successfully created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 hangoutId:
 *                   type: string
 *                 parkId:
 *                   type: string
 *                 title:
 *                   type: string
 *                 description:
 *                   type: string
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *       401:
 *         description: Unauthorized – user not logged in
 *       400:
 *         description: Missing required fields or invalid check-in
 *       500:
 *         description: Server error during hangout creation
 */
router.post('/', requireAuth, createHangoutForUserInPark)

/**
 * @swagger
 *  /v1/hangouts/{parkId}:
 *   get:
 *     tags: [Hangouts]
 *     summary: Get hangouts for a specific park
 *     description: Retrieves a list of hangouts currently associated with a park by its ID. Returns 204 if the list is empty.
 *     parameters:
 *       - in: path
 *         name: parkId
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique identifier of the park
 *         example: relation/15745219
 *     responses:
 *       200:
 *         description: List of hangouts found for the park
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     example: 648b7282a1a00b4b7fdcba33
 *                   title:
 *                     type: string
 *                     example: Frisbee game
 *                   description:
 *                     type: string
 *                     example: Come play with us!
 *                   userId:
 *                     type: string
 *                     example: 648a2e461e8fe74806d7dcdc
 *                   checkInId:
 *                     type: string
 *                     example: 8ee3e4d9-c3fc-4aa9-b8c5-63e93df07b2d
 *                   parkId:
 *                     type: string
 *                     example: relation/15745219
 *       204:
 *         description: No hangouts found for the given park
 *       500:
 *         description: Server error while retrieving hangouts
 */
router.get('/:parkId', getHangoutsByParkId)

module.exports = router
