const { AuthService } = require('../../domain/services/AuthService')
const {
  userRepository,
  jwtService,
  bcryptService,
} = require('../../config/container')

async function signUpUseCase({ email, password }) {
  return await AuthService.signUp({
    email,
    password,
    userRepository,
    bcryptService,
    jwtService,
    jwtSecret: process.env.JWT_SECRET,
  })
}

async function loginUseCase({ email, password }) {
  return await AuthService.login({
    email,
    password,
    userRepository,
    bcryptService,
    jwtService,
    jwtSecret: process.env.JWT_SECRET,
  })
}

module.exports = { signUpUseCase, loginUseCase }
