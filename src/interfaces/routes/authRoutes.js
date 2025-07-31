const express = require('express')
const router = express.Router()
const {
  loginController,
  signUpController,
} = require('../controllers/authController')

/**
 * @swagger
 * /v1/auth/login:
 *   post:
 *     tags: [Auth]
 *     summary: Log in an existing user
 *     description: Authenticate a user with email and password to receive a JWT token.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: user@example.com
 *               password:
 *                 type: string
 *                 example: securePassword123
 *     responses:
 *       200:
 *         description: Authentication successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: JWT token
 *       401:
 *         description: Invalid credentials
 */
router.post('/login', loginController)

/**
 * @swagger
 * /v1/auth/signup:
 *   post:
 *     tags: [Auth]
 *     summary: Register a new user
 *     description: Create a new user account with email and password.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: newuser@example.com
 *               password:
 *                 type: string
 *                 example: myStrongPassword
 *     responses:
 *       201:
 *         description: User successfully registered
 *       400:
 *         description: Invalid input or user already exists
 */
router.post('/signup', signUpController)

module.exports = router
