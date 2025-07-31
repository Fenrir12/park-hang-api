class CheckInRepository {
  async create(data) {
    throw new Error('CheckInRepository.create not implemented')
  }
  async findByUserId(userId) {
    throw new Error('CheckInRepository.findByUserId not implemented')
  }
}

module.exports = CheckInRepository
