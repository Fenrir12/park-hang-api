const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'ParkHang API',
      version: '1.0.0',
      description:
        'Automatically generated Swagger documentation for ParkHang API',
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [{ bearerAuth: [] }],
  },
  apis: ['./src/interfaces/routes/*.js'],
}

const swaggerSpec = swaggerJSDoc(options)

module.exports = { swaggerSpec, swaggerUi }
