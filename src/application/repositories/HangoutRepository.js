class HangoutRepository {
  async create(userId, checkInId, parkId, hangoutId, params) {
    throw new Error('CheckInRepository.create not implemented')
  }
  async update(hangoutId, params) {
    throw new Error('CheckInRepository.update not implemented')
  }
  async delete(hangoutId) {
    throw new Error('CheckInRepository.delete not implemented')
  }
  async findByUserId(userId) {
    throw new Error('CheckInRepository.findByUserId not implemented')
  }
  async findByParkId(parkId) {
    throw new Error('CheckInRepository.findByParkId not implemented')
  }
}

module.exports = HangoutRepository
