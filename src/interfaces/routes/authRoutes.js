const express = require('express')
const router = express.Router()
const {
  loginController,
  signUpController,
} = require('../controllers/authController')

router.post('/login', loginController)
router.post('/signup', signUpController)

module.exports = router
