const User = require('../models/userModel')

exports.getMe = async (req, res) => {
  const { id, _ } = req.user
  try {
    const user = await User.findOne({ _id: id })
    if (!user) return res.status(409).json({ message: 'User not found' })

    res.status(200).json({ email: user.email })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Server error' })
  }
}
