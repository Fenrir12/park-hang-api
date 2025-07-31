const MongoUserRepository = require('../infrastructure/db/mongo/repositories/MongoUserRepository')
const MongoParkRepository = require('../infrastructure/db/mongo/repositories/MongoParkRepository')
const MongoPinRepository = require('../infrastructure/db/mongo/repositories/MongoPinRepository')
const MongoCheckInRepository = require('../infrastructure/db/mongo/repositories/MongoCheckInRepository')
const MongoHangoutRepository = require('../infrastructure/db/mongo/repositories/MongoHangoutRepository')

const JwtService = require('../infrastructure/auth/JwtService')
const BcryptService = require('../infrastructure/auth/BcryptService')

const container = {
  userRepository: new MongoUserRepository(),
  parkRepository: new MongoParkRepository(),
  pinRepository: new MongoPinRepository(),
  checkInRepository: new MongoCheckInRepository(),
  hangoutRepository: new MongoHangoutRepository(),

  jwtService: JwtService,
  bcryptService: BcryptService,
}

module.exports = container
