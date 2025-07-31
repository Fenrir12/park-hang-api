const JwtService = require('../../infrastructure/auth/JwtService')
const env = require('../../config/env')

function requireAuth(req, res, next) {
  const authHeader = req.headers.authorization
  if (!authHeader) return res.sendStatus(401)

  try {
    const token = authHeader.split(' ')[1]
    req.user = JwtService.verify(token, env.JWT_SECRET)
    next()
  } catch (err) {
    console.error(err)
    res.sendStatus(403)
  }
}

function verifyAuth(req, res, next) {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    // No token provided – proceed anonymously
    return next()
  }

  const token = authHeader.split(' ')[1]

  try {
    const decoded = JwtService.verify(token, env.JWT_SECRET)
    req.user = decoded
  } catch (err) {
    console.warn('Optional auth: invalid token, proceeding as guest')
    req.user = undefined // or don't touch it
  }

  next()
}

module.exports = { requireAuth, verifyAuth }
