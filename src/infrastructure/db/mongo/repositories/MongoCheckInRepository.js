const CheckInModel = require('../models/CheckInModel')
const CheckInRepository = require('../../../../application/repositories/CheckInRepository')

class MongoCheckInRepository extends CheckInRepository {
  async create(data) {
    return CheckInModel.create(data)
  }
}

module.exports = MongoCheckInRepository
