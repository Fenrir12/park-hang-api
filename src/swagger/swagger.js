const swaggerJsDoc = require('swagger-jsdoc')

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'ParkHang API',
      version: '1.0.0',
    },
  },
  apis: ['./routes/*.js'], // Looks for JSDoc comments in route files
}

module.exports = swaggerJsDoc(options)
