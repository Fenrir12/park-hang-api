const mongoose = require('mongoose')

const geometrySchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ['Point', 'Polygon', 'MultiPolygon'],
      required: true,
    },
    coordinates: {
      type: Array, // More precise typing can be added depending on the `type`
      required: true,
    },
  },
  { _id: false },
)

const propertiesSchema = new mongoose.Schema(
  {
    '@id': { type: String, required: true },
    'addr:housenumber': { type: String },
    'addr:street': { type: String },
    leisure: { type: String },
    name: { type: String },
    'name:fr': { type: String },
    type: { type: String }, // only present in some features
    '@tainted': { type: Boolean },
    '@geometry': { type: String },
  },
  { _id: false },
)

const featureSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['Feature'],
    required: true,
  },
  id: { type: String, required: true },
  properties: {
    type: propertiesSchema,
    required: true,
  },
  geometry: {
    type: geometrySchema,
    required: true,
  },
})

featureSchema.index({ geometry: '2dsphere' })

const Park = mongoose.model('Park', featureSchema)

module.exports = Park
