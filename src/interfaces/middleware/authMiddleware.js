const JwtService = require('../../infrastructure/auth/JwtService')
const env = require('../../config/env')

module.exports = (req, res, next) => {
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
