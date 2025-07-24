const PinModel = require('../models/pinModel')
const ParkModel = require('../models/parkModel')

/**
 * Find parks near a point within a radius (meters)
 * @param {Number} longitude
 * @param {Number} latitude
 * @param {Number} radiusMeters
 */
exports.getNearbyPins = async (req, res) => {
  try {
    const { lng, lat, radius } = req.query

    console.log('Nearby parks query', lng, lat, radius)
    if (!lng || !lat || !radius) {
      return res.status(400).json({
        message: 'Please provide lng, lat, and radius query parameters',
      })
    }

    const longitude = parseFloat(lng)
    const latitude = parseFloat(lat)
    const radiusMeters = parseFloat(radius)

    const pins = await PinModel.find({
      geolocation: {
        $nearSphere: {
          $geometry: {
            type: 'Point',
            coordinates: [longitude, latitude],
          },
          $maxDistance: radiusMeters,
        },
      },
    })

    res.json(pins)
  } catch (error) {
    console.error('Error fetching nearby parks:', error)
    res.status(500).json({ message: 'Server error' })
  }
}

/**
 * Find parks near a point within a radius (meters)
 * @param {String} idList
 */
exports.getParkByIdList = async (req, res) => {
  try {
    const { limit } = req.query
    const { parksIds } = req.body

    console.log('Park query by id', parksIds)
    if (!parksIds) {
      return res
        .status(400)
        .json({ message: 'Please provide parks idList parameter' })
    }

    const limitedIds = parksIds.slice(0, limit ?? 30)

    const parks = await ParkModel.find({
      id: { $in: limitedIds },
    })

    // Reorder the parks based on the original order of parksIds
    const parkMap = new Map(parks.map((park) => [park.id, park]))
    const orderedParks = limitedIds.map((id) => parkMap.get(id)).filter(Boolean)

    res.json(orderedParks)
  } catch (error) {
    console.error('Error fetching nearby parks by ids:', error)
    res.status(500).json({ message: 'Server error' })
  }
}
