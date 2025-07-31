const jwt = require('jsonwebtoken')

const JwtService = {
  sign(payload, secret, options) {
    return jwt.sign(payload, secret, options)
  },
  verify(token, secret) {
    return jwt.verify(token, secret)
  },
}

module.exports = JwtService
