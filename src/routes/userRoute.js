const express = require('express')
const router = express.Router()
const { getMe, patchMe } = require('../controllers/userController')
const requireAuth = require('../middleware/authMiddleware')

router.get('/me', requireAuth, getMe)

router.patch('/me', requireAuth, patchMe)

module.exports = router
