const {
  checkInToParkUseCase,
} = require('../../application/usecases/checkInUseCases')

async function checkInToPark(req, res) {
  const { parkId } = req.params

  if (!parkId) {
    res.status(400).json({ message: 'Please provide parkId' })
  }

  const userId = req.user?.id
  try {
    const result = await checkInToParkUseCase({ parkId, userId })
    res.json(result)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Error checking in' })
  }
}

module.exports = { checkInToPark }
