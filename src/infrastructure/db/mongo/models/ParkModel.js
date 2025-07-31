const mongoose = require('mongoose')

const parkSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: String,
  geolocation: {
    type: { type: String },
    coordinates: [Number],
  },
})

module.exports = mongoose.model('Park', parkSchema)
