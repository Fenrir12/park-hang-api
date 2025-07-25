const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const swaggerUi = require('swagger-ui-express')
const swaggerSpec = require('./swagger/swagger')
const https = require('https')
const fs = require('fs')

const authRoutes = require('./routes/authRoutes')
const pinsRoutes = require('./routes/pinsRoutes')
const parkRoutes = require('./routes/parkRoutes')

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/auth', authRoutes)
app.use('/api/pins', pinsRoutes)
app.use('/api/parks', parkRoutes)
// app.use('/api/checkin', require('./routes/checkinRoutes'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

const PORT = process.env.PORT
const httpsOptions = {
  key: fs.readFileSync('./secrets/server.key'),
  cert: fs.readFileSync('./secrets/server.crt'),
}

https.createServer(httpsOptions, app).listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 HTTPS Server running on https://sam-mac.local:${PORT}`)
})
