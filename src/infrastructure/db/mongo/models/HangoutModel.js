const mongoose = require('mongoose')

const HangoutSchema = new mongoose.Schema(
  {
    hangoutId: { type: String, required: true, unique: true },
    userId: { type: String, required: true },
    checkInId: { type: String, required: true },
    parkId: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String },
    createdAt: { type: Date, default: Date.now, expires: '4h' }, // TTL auto-delete
  },
  { timestamps: true },
)

module.exports = mongoose.model('Hangout', HangoutSchema)
