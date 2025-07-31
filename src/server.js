const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const { MONGO_URI, PORT } = require('./config/env')
const { swaggerSpec, swaggerUi } = require('./swagger/swagger')

const authRoutes = require('./interfaces/routes/authRoutes')
const userRoutes = require('./interfaces/routes/userRoutes')
const parkRoutes = require('./interfaces/routes/parkRoutes')
const pinRoutes = require('./interfaces/routes/pinRoutes')
const checkinRoutes = require('./interfaces/routes/checkinRoutes')
const hangoutRoutes = require('./interfaces/routes/hangoutRoutes')

const app = express()
app.use(cors())
app.use(express.json())

app.use('/v1/auth', authRoutes)
app.use('/v1/users', userRoutes)
app.use('/v1/parks', parkRoutes)
app.use('/v1/pins', pinRoutes)
app.use('/v1/check-in', checkinRoutes)
app.use('/v1/hangouts', hangoutRoutes)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('✅ Connected to MongoDB')
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`)
    })
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err)
  })
