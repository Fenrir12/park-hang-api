const UserModel = require('../models/UserModel')
const UserRepository = require('../../../../application/repositories/UserRepository')

class MongoUserRepository extends UserRepository {
  async findById(id) {
    return UserModel.findById(id)
  }
  async findByEmail(email) {
    return UserModel.findOne({ email })
  }
  async create(userData) {
    return UserModel.create(userData)
  }
  async update(id, updateData) {
    return UserModel.findByIdAndUpdate(id, updateData, { new: true })
  }
  async findManyByIds(ids) {
    // Ensures all ids are ObjectIds if necessary
    return UserModel.find({ _id: { $in: ids } })
  }
}

module.exports = MongoUserRepository
