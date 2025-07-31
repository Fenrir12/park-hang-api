const ParkModel = require('../models/ParkModel')
const ParkRepository = require('../../../../application/repositories/ParkRepository')

class MongoParkRepository extends ParkRepository {
  async findById(parkId) {
    return ParkModel.findOne({ id: parkId })
  }
  async findByIds(ids) {
    return ParkModel.find({ id: { $in: ids } })
  }
}

module.exports = MongoParkRepository
