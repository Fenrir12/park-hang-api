const mongoose = require('mongoose')
const { TTL_SECONDS } = require('../../../../config/ttl')

const checkInSchema = new mongoose.Schema(
  {
    checkInId: { type: String, required: true },
    userId: { type: String },
    isAnonymous: { type: Boolean, default: true },
    currentPark: { type: Object },
    timestamp: { type: Date, default: Date.now },
  },
  { timestamps: true },
)
checkInSchema.index(
  { timestamp: 1 },
  { expireAfterSeconds: TTL_SECONDS.CHECKIN_EXPIRATION },
)

module.exports = mongoose.model('CheckIn', checkInSchema)
