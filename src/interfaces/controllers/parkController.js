const {
  getNearbyPinsUseCase,
  getParksByIdListUseCase,
} = require('../../application/usecases/parkUseCases')

async function getNearbyPinsController(req, res) {
  const { lng, lat, radius } = req.query
  if (!lng || !lat || !radius) {
    return res
      .status(400)
      .json({ message: 'Please provide lng, lat, and radius query parameters' })
  }

  try {
    const pins = await getNearbyPinsUseCase({ lng, lat, radius })
    res.status(200).json(pins)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: err.message || 'Server error' })
  }
}

async function getParkByIdListController(req, res) {
  const { parksIds } = req.body
  const { limit } = req.query
  if (!parksIds) {
    return res
      .status(400)
      .json({ message: 'Please provide parks idList parameter' })
  }

  try {
    const parks = await getParksByIdListUseCase(parksIds, limit)
    res.status(200).json(parks)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: err.message || 'Server error' })
  }
}

module.exports = { getNearbyPinsController, getParkByIdListController }
