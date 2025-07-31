const { JwtService } = require('../../infrastructure/auth/JwtService')

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization
  if (!authHeader) return res.sendStatus(401)

  try {
    const token = authHeader.split(' ')[1]
    req.user = JwtService.verify(token, process.env.JWT_SECRET)
    next()
  } catch {
    res.sendStatus(403)
  }
}
