class AuthService {
  static async signUp({
    email,
    password,
    userRepository,
    bcryptService,
    jwtService,
    jwtSecret,
  }) {
    const existing = await userRepository.findByEmail(email)
    if (existing) throw new Error('User already exists')

    const passwordHash = await bcryptService.hash(password)
    const user = await userRepository.create({ email, passwordHash })

    const token = jwtService.sign(
      { id: user._id, email: user.email },
      jwtSecret,
      { expiresIn: '1d' },
    )
    return { token }
  }

  static async login({
    email,
    password,
    userRepository,
    bcryptService,
    jwtService,
    jwtSecret,
  }) {
    const user = await userRepository.findByEmail(email)
    if (!user) throw new Error('User not found')

    const valid = await bcryptService.compare(password, user.passwordHash)
    if (!valid) throw new Error('Invalid credentials')

    const token = jwtService.sign(
      { id: user._id, email: user.email },
      jwtSecret,
      { expiresIn: '1d' },
    )
    return { token }
  }
}

module.exports = AuthService
