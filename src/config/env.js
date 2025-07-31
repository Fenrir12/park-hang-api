// src/config/env.js
require('dotenv').config()

function getEnvVariable(key, required = true) {
  const value = process.env[key]
  if (required && (value === undefined || value === '')) {
    console.error(`❌ Missing required environment variable: ${key}`)
    process.exit(1)
  }
  return value
}

module.exports = {
  MONGO_URI: getEnvVariable('MONGO_URI'),
  JWT_SECRET: getEnvVariable('JWT_SECRET'),
  PORT: getEnvVariable('PORT', false) || 3000,
}
