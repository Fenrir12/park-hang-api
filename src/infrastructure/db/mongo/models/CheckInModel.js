const mongoose = require('mongoose')

const checkInSchema = new mongoose.Schema({
  checkInId: { type: String, required: true },
  userId: { type: String },
  isAnonymous: { type: Boolean, default: true },
  currentPark: { type: Object },
  timestamp: { type: Date, default: Date.now },
})

module.exports = mongoose.model('CheckIn', checkInSchema)
