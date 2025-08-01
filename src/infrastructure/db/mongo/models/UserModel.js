const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  name: String,
  surname: String,
  profileName: String,
  city: String,
  province: String,
  dateOfBirth: Date,
})

module.exports = mongoose.model('User', userSchema)
