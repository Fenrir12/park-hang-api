const {
  loginUseCase,
  signUpUseCase,
} = require('../../application/usecases/authUseCases')

async function loginController(req, res) {
  const { email, password } = req.body
  try {
    const result = await loginUseCase({ email, password })
    res.status(200).json(result)
  } catch (err) {
    console.error(err)
    res
      .status(err.message === 'User not found' ? 404 : 401)
      .json({ message: err.message })
  }
}

async function signUpController(req, res) {
  const { email, password } = req.body
  try {
    const result = await signUpUseCase({ email, password })
    res.status(200).json(result)
  } catch (err) {
    console.error(err)
    const code = err.message === 'User already exists' ? 409 : 500
    res.status(code).json({ message: err.message })
  }
}

module.exports = { loginController, signUpController }
