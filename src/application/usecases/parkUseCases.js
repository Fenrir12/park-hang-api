const { ParkService } = require('../../domain/services/ParkService')
const { parkRepository, pinRepository } = require('../../config/container')

async function getNearbyPinsUseCase({ lng, lat, radius }) {
  return await ParkService.getNearbyPins({
    longitude: parseFloat(lng),
    latitude: parseFloat(lat),
    radius: parseFloat(radius),
    pinRepository,
  })
}

async function getParksByIdListUseCase(parksIds, limit) {
  return await ParkService.getParksByIdList({
    parksIds,
    limit,
    parkRepository,
  })
}

module.exports = { getNearbyPinsUseCase, getParksByIdListUseCase }
