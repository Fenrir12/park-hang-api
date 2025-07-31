const { CheckInService } = require('../../domain/services/CheckInService')
const { parkRepository, checkInRepository } = require('../../config/container')

async function checkInToParkUseCase({ parkId, user }) {
  return await CheckInService.checkInToPark({
    parkId,
    user,
    parkRepository,
    checkInRepository,
  })
}

module.exports = { checkInToParkUseCase }
