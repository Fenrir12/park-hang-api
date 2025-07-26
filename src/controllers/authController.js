const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../models/userModel')

exports.signUp = async (req, res) => {
  const { email, password } = req.body
  console.log('Creating user with:', { email: email, password: password })

  try {
    const existing = await User.findOne({ email: email })
    if (existing)
      return res.status(409).json({ message: 'User already exists' })

    const passwordHash = await bcrypt.hash(password, 10)
    console.log('Hash is:', { passwordHash })

    await User.create({
      email: email,
      passwordHash: passwordHash,
    })

    const newUser = await User.findOne({ email: email })

    const token = jwt.sign(
      { id: newUser._id, email: newUser.email },
      process.env.JWT_SECRET,
      {
        expiresIn: '1d',
      },
    )

    res.status(200).json({ token })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Server error' })
  }
}

exports.login = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await User.findOne({ email })
    if (!user) return res.status(404).json({ message: 'User not found' })

    const valid = await bcrypt.compare(password, user.passwordHash)
    if (!valid) return res.status(401).json({ message: 'Invalid credentials' })

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      {
        expiresIn: '1d',
      },
    )
    res.json({ token })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Server error' })
  }
}
