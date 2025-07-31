const mongoose = require('mongoose')

const pinSchema = new mongoose.Schema({
  id: String,
  geolocation: {
    type: { type: String },
    coordinates: [Number],
  },
})

module.exports = mongoose.model('Pin', pinSchema)
