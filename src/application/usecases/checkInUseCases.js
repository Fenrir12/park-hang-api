const CheckInService = require('../../domain/services/CheckInService')
const { parkRepository, checkInRepository } = require('../../config/container')

async function checkInToParkUseCase({ parkId, userId }) {
  return await CheckInService.checkInToPark({
    parkId,
    userId,
    parkRepository,
    checkInRepository,
  })
}

module.exports = { checkInToParkUseCase }
