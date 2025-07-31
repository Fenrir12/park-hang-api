const {
  getMeUseCase,
  patchMeUseCase,
} = require('../../application/usecases/userUseCases')

async function getMeController(req, res) {
  try {
    const userData = await getMeUseCase(req.user.id)
    res.status(200).json(userData)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: err.message || 'Server error' })
  }
}

async function patchMeController(req, res) {
  try {
    const updated = await patchMeUseCase(req.user.id, req.body)
    res.status(200).json(updated)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: err.message || 'Server error' })
  }
}

module.exports = { getMeController, patchMeController }
