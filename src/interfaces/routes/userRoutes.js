const express = require('express')
const router = express.Router()
const {
  getMeController,
  patchMeController,
} = require('../controllers/userController')
const requireAuth = require('../middleware/authMiddleware')

router.get('/me', requireAuth, getMeController)
router.patch('/me', requireAuth, patchMeController)

module.exports = router
