const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const swaggerUi = require('swagger-ui-express')
const swaggerSpec = require('./swagger/swagger')

const authRoutes = require('./routes/authRoutes')
const pinsRoutes = require('./routes/pinsRoutes')
const parkRoutes = require('./routes/parkRoutes')
const userRoutes = require('./routes/userRoute')

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

app.use('/v1/auth', authRoutes)
app.use('/v1/pins', pinsRoutes)
app.use('/v1/parks', parkRoutes)
app.use('/v1/users', userRoutes)
// app.use('/v1/checkin', require('./routes/checkinRoutes'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

const PORT = process.env.PORT

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 HTTPS Server running`)
})
