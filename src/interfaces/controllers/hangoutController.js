const {
  addNewHangoutForUserInParkUseCase,
  getHangoutByParkIdUseCase,
} = require('../../application/usecases/hangoutUseCases')

async function createHangoutForUserInPark(req, res) {
  const { parkId, title, description } = req.body

  if (!parkId || !title || !description) {
    res.status(400).json({
      message: 'Please provide parkId, title, and description in body',
    })
  }
  const user = req.user
  console.log(user)
  try {
    const result = await addNewHangoutForUserInParkUseCase(
      req.user.id,
      parkId,
      { title, description },
    )
    res.json(result)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Error creating hangout' })
  }
}

async function getHangoutsByParkId(req, res) {
  const { parkId } = req.params

  if (!parkId) {
    return res.status(400).json({ message: 'Must provide a parkId' })
  }

  try {
    const result = await getHangoutByParkIdUseCase(parkId)
    if (!result || result.length === 0) {
      return res.status(204).send()
    }

    res.status(200).json(result)
  } catch (err) {
    console.error(err)
    res.status(204).json({ message: 'hangouts ' })
  }
}

module.exports = { createHangoutForUserInPark, getHangoutsByParkId }
