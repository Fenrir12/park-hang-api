const HangoutModel = require('../models/HangoutModel')
const HangoutRepository = require('../../../../application/repositories/HangoutRepository')

class MongoHangoutRepository extends HangoutRepository {
  async create(userId, checkInId, parkId, hangoutId, params) {
    return HangoutModel.create({
      hangoutId: hangoutId,
      userId: userId,
      checkInId: checkInId,
      parkId: parkId,
      title: params.title,
      description: params.description,
    })
  }

  async update(hangoutId, params) {
    return HangoutModel.findByIdAndUpdate(hangoutId, {
      title: params.title,
      description: params.description,
    })
  }

  async delete(hangoutId) {
    return HangoutModel.deleteOne(hangoutId)
  }

  async findByUserId(userId) {
    return HangoutModel.findOne({ userId: userId })
  }

  async findByParkId(parkId) {
    return HangoutModel.find({ parkId: parkId })
  }
}

module.exports = MongoHangoutRepository
