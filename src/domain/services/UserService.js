class UserService {
  static async getUserProfile({ userId, userRepository }) {
    const user = await userRepository.findById(userId)
    if (!user) throw new Error('User not found')
    return {
      id: user._id,
      email: user.email,
      name: user.name,
      surname: user.surname,
      profileName: user.profileName,
      city: user.city,
      province: user.province,
      dateOfBirth: user.dateOfBirth,
    }
  }

  static async updateUserProfile({ userId, updates, userRepository }) {
    const updatedUser = await userRepository.update(userId, updates)
    if (!updatedUser) throw new Error('User not found')
    return {
      id: updatedUser._id,
      email: updatedUser.email,
      name: updatedUser.name,
      surname: updatedUser.surname,
      profileName: updatedUser.profileName,
      city: updatedUser.city,
      province: updatedUser.province,
      dateOfBirth: updatedUser.dateOfBirth,
    }
  }
}

module.exports = UserService
