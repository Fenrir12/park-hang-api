const express = require('express')
const router = express.Router()
const {
  getMeController,
  patchMeController,
} = require('../controllers/userController')
const requireAuth = require('../middleware/authMiddleware')

/**
 * @swagger
 * /v1/users/me:
 *   get:
 *     tags: [Users]
 *     summary: Get current authenticated user's profile
 *     description: Returns the profile data of the currently authenticated user.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User profile returned successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 email:
 *                   type: string
 *                 name:
 *                   type: string
 *                 avatar:
 *                   type: string
 *       401:
 *         description: Unauthorized – missing or invalid token
 */
router.get('/me', requireAuth, getMeController)

/**
 * @swagger
 * /v1/users/me:
 *   patch:
 *     tags: [Users]
 *     summary: Update current user's profile
 *     description: Allows the authenticated user to update their profile fields like name or avatar.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Samuel Otis
 *               avatar:
 *                 type: string
 *                 format: uri
 *                 example: https://example.com/avatar.png
 *     responses:
 *       200:
 *         description: User profile updated successfully
 *       400:
 *         description: Invalid update payload
 *       401:
 *         description: Unauthorized – missing or invalid token
 */
router.patch('/me', requireAuth, patchMeController)

module.exports = router
