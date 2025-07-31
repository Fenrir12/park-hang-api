const { v4: uuidv4 } = require('uuid')

class HangoutService {
  /**
   * Create a hangout for a user
   * @param {string} userId - The ID of the user creating the hangout
   * @param {string} parkId - The park ID for the hangout
   * @param {{ title: string, description?: string }} params - Hangout data
   * @param {MongoParkRepository} parkRepository - Instance of ParkRepository
   * @param {MongoCheckInRepository} checkInRepository - Instance of CheckInRepository
   * @param {MongoHangoutRepository} hangoutRepository - Instance of HangoutRepository
   * @returns {Promise<Object>} The created hangout
   */
  static async createHangoutForUser(
    userId,
    parkId,
    params,
    parkRepository,
    checkInRepository,
    hangoutRepository,
  ) {
    const checkIn = await checkInRepository.findByUserId(userId)
    if (!checkIn) {
      throw new Error(`No check-in with userId:${userId} was found`)
    }
    return await hangoutRepository.create(
      userId,
      checkIn.checkInId,
      parkId,
      uuidv4(),
      params,
    )
  }

  /**
   * Create a hangout for a user
   * @param {string} parkId - The park ID for the hangout
   * @param {MongoHangoutRepository} hangoutRepository - Instance of HangoutRepository
   * @returns {Promise<Object>} The created hangout
   */
  static async getHangoutsByParkId(parkId, hangoutRepository) {
    return await hangoutRepository.findByParkId(parkId)
  }
}

module.exports = HangoutService
