const { v4: uuidv4 } = require('uuid')

class CheckInService {
  static async checkInToPark({
    parkId,
    userId,
    parkRepository,
    checkInRepository,
  }) {
    const park = await parkRepository.findById(parkId)
    if (!park) throw new Error(`Park ${parkId} not found`)

    const checkIn = await checkInRepository.create({
      checkInId: uuidv4(),
      userId: userId,
      isAnonymous: !userId,
      currentPark: park,
    })

    return {
      checkInId: checkIn.checkInId,
      isAnonymous: checkIn.isAnonymous,
      currentPark: checkIn.currentPark,
      timestamp: checkIn.timestamp,
    }
  }
}

module.exports = CheckInService
