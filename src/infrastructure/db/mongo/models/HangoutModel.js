const mongoose = require('mongoose')
const { TTL_SECONDS } = require('../../../../config/ttl')

const HangoutSchema = new mongoose.Schema(
  {
    hangoutId: { type: String, required: true, unique: true },
    userId: { type: String, required: true },
    checkInId: { type: String, required: true },
    parkId: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String },
    createdAt: { type: Date, default: Date.now }, // TTL auto-delete
  },
  { timestamps: true },
)
HangoutSchema.index(
  { createdAt: 1 },
  { expireAfterSeconds: TTL_SECONDS.HANGOUT_EXPIRATION },
)

module.exports = mongoose.model('Hangout', HangoutSchema)
