const mongoose = require('mongoose')

const pinSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  geolocation: {
    type: {
      type: String,
      enum: ['Point'],
      default: 'Point',
      required: true,
    },
    coordinates: {
      type: [Number], // [longitude, latitude]
      required: true,
    },
  },
})

// Enable geospatial index on 'geolocation'
pinSchema.index({ geolocation: '2dsphere' })

const Pin = mongoose.model('Pin', pinSchema)

module.exports = Pin
