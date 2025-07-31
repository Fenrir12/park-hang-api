const mongoose = require('mongoose')

const checkInSchema = new mongoose.Schema({
  checkInId: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    ref: 'User',
    required: false,
  },
  isAnonymous: {
    type: Boolean,
    default: true,
    required: true,
  },
  currentPark: {
    type: Object,
    ref: 'Park',
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  expiresAt: {
    type: Date,
    default: () => new Date(Date.now() + CHECKIN_DURATION_MS), // 4 hours from now
    index: { expires: 0 }, // TTL index: expire at this time
  },
})

checkInSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 })
module.exports = mongoose.model('CheckIn', checkInSchema)

const CHECKIN_DURATION_MS = 4 * 60 * 60 * 1000 // 1 hour
