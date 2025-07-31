const { UserService } = require('../../domain/services/UserService')
const { userRepository } = require('../../config/container')

async function getMeUseCase(userId) {
  return await UserService.getUserProfile({
    userId,
    userRepository,
  })
}

async function patchMeUseCase(userId, updates) {
  return await UserService.updateUserProfile({
    userId,
    updates,
    userRepository,
  })
}

module.exports = { getMeUseCase, patchMeUseCase }
