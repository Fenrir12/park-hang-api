const CheckInModel = require('../models/CheckInModel')
const CheckInRepository = require('../../../../application/repositories/CheckInRepository')

class MongoCheckInRepository extends CheckInRepository {
  async create(data) {
    return CheckInModel.create(data)
  }
  async findByUserId(userId) {
    return CheckInModel.findOne({ userId })
  }
}

module.exports = MongoCheckInRepository
