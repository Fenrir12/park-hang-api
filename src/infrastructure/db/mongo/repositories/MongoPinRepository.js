const PinModel = require('../models/PinModel')
const PinRepository = require('../../../../application/repositories/PinRepository')

class MongoPinRepository extends PinRepository {
  async findNearby(longitude, latitude, radiusMeters) {
    return PinModel.find({
      geolocation: {
        $nearSphere: {
          $geometry: {
            type: 'Point',
            coordinates: [longitude, latitude],
          },
          $maxDistance: radiusMeters,
        },
      },
    })
  }
}

module.exports = MongoPinRepository
