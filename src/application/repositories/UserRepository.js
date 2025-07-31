class UserRepository {
  async findById(id) {
    throw new Error('UserRepository.findById not implemented')
  }

  async findByEmail(email) {
    throw new Error('UserRepository.findByEmail not implemented')
  }

  async create(userData) {
    throw new Error('UserRepository.create not implemented')
  }

  async update(id, updateData) {
    throw new Error('UserRepository.update not implemented')
  }

  async findManyByIds(ids) {
    throw new Error('UserRepository.findMany not implemented')
  }
}

module.exports = UserRepository
