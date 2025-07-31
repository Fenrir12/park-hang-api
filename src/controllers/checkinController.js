// controllers/checkInController.js
const { v4: uuidv4 } = require('uuid')
const CheckIn = require('../models/checkinModel')
const Park = require('../models/parkModel')

async function checkInToPark(req, res) {
  const { parkId } = req.params
  const user = req.user // Comes from auth middleware (optional)

  try {
    const park = await Park.findOne({ id: parkId })
    if (!park) {
      return res.status(404).json({ message: 'Park not found' })
    }

    const checkIn = await CheckIn.create({
      checkInId: uuidv4(),
      userId: user?.id,
      isAnonymous: !user,
      currentPark: park,
    })

    res.json({
      checkInId: checkIn.checkInId,
      isAnonymous: checkIn.isAnonymous,
      currentPark: checkIn.currentPark,
      timestamp: checkIn.timestamp,
    })
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Error checking in' })
  }
}

module.exports = {
  checkInToPark,
}
