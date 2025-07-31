const MongoUserRepository = require('../infrastructure/db/mongo/repositories/MongoUserRepository')
const MongoParkRepository = require('../infrastructure/db/mongo/repositories/MongoParkRepository')
const MongoPinRepository = require('../infrastructure/db/mongo/repositories/MongoPinRepository')
const MongoCheckInRepository = require('../infrastructure/db/mongo/repositories/MongoCheckInRepository')

const JwtService = require('../infrastructure/auth/JwtService')
const BcryptService = require('../infrastructure/auth/BcryptService')

const container = {
  userRepository: new MongoUserRepository(),
  parkRepository: new MongoParkRepository(),
  pinRepository: new MongoPinRepository(),
  checkInRepository: new MongoCheckInRepository(),

  jwtService: JwtService,
  bcryptService: BcryptService,
}

module.exports = container
