const User = require('../models/userModel')

exports.getMe = async (req, res) => {
  const { id, _ } = req.user
  try {
    const user = await User.findOne({ _id: id })
    if (!user) return res.status(409).json({ message: 'User not found' })

    res.status(200).json({
      id: user._id,
      email: user.email,
      name: user.name,
      surname: user.surname,
      profileName: user.profileName,
      city: user.city,
      province: user.province,
      dateOfBirth: user.dateOfBirth,
    })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Server error' })
  }
}

exports.patchMe = async (req, res) => {
  const { id } = req.user

  const {
    email,
    name,
    surname,
    profileName,
    city,
    province,
    dateOfBirth,
  } = req.body

  try {
    console.log(req.body)
    const user = await User.findById(id)
    if (!user) return res.status(404).json({ message: 'User not found' })

    // Only update fields that are present in the request
    if (name !== undefined) user.name = name
    if (surname !== undefined) user.surname = surname
    if (profileName !== undefined) user.profileName = profileName
    if (city !== undefined) user.city = city
    if (province !== undefined) user.province = province
    if (dateOfBirth !== undefined) user.dateOfBirth = dateOfBirth
    await user.save()

    console.log('User updated', user)

    res.status(200).json({
      id: user._id,
      email: user.email,
      name: user.name,
      surname: user.surname,
      profileName: user.profileName,
      city: user.city,
      province: user.province,
      dateOfBirth: user.dateOfBirth,
    })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Server error' })
  }
}
