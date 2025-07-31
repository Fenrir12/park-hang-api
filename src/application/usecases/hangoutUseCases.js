const HangoutService = require('../../domain/services/HangoutService')
const Hangout = require('../../domain/models/Hangout')

const {
  parkRepository,
  checkInRepository,
  hangoutRepository,
  userRepository,
} = require('../../config/container')

async function addNewHangoutForUserInParkUseCase(userId, parkId, params) {
  return await HangoutService.createHangoutForUser(
    userId,
    parkId,
    params,
    parkRepository,
    checkInRepository,
    hangoutRepository,
  )
}

async function getHangoutByParkIdUseCase(parkId) {
  const hangouts = await hangoutRepository.findByParkId(parkId)

  const userIds = [...new Set(hangouts.map((h) => h.userId.toString()))]

  const users = await userRepository.findManyByIds(userIds)
  const userMap = Object.fromEntries(
    users.map((u) => [
      u._id.toString(),
      u.profile?.name || u.email || 'Unknown User',
    ]),
  )

  return hangouts.map((h) => {
    return new Hangout({
      id: h._id.toString(),
      ownerName: userMap[h.userId.toString()],
      title: h.title,
      description: h.description,
      createdAt: h.createdAt.toISOString(),
    })
  })
}

module.exports = {
  addNewHangoutForUserInParkUseCase,
  getHangoutByParkIdUseCase,
}
