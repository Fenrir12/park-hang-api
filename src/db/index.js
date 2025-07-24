const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()
const port = 3000

mongoose
  .connect(process.env.MONGO_URI.toString(), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => console.error('❌ MongoDB connection error:', err))

// Simple route
app.get('/', (req, res) => {
  res.send('MongoDB is connected!')
})

app.listen(port, () => {
  console.log(`🚀 DB running at http://localhost:${port}`)
})
