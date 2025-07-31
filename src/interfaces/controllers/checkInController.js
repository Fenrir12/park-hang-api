const {
  checkInToParkUseCase,
} = require('../../application/usecases/checkInUseCases')

async function checkInToPark(req, res) {
  const { parkId } = req.params
  const user = req.user

  try {
    const result = await checkInToParkUseCase({ parkId, user })
    res.json(result)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Error checking in' })
  }
}

module.exports = { checkInToPark }
