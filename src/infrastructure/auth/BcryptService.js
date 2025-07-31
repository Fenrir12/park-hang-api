const bcrypt = require('bcryptjs')

const BcryptService = {
  hash(password, saltRounds = 10) {
    return bcrypt.hash(password, saltRounds)
  },
  compare(password, hash) {
    return bcrypt.compare(password, hash)
  },
}

module.exports = BcryptService
