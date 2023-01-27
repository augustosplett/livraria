import swaggerAutogen from 'swagger-autogen'

const outputFile = './swagger_output.json'
const endpointsFiles = ['./src/routes/autoresRoutes.js', './src/routes/editorasRoutes.js', './src/routes/livrosRoutes.js']

swaggerAutogen(outputFile, endpointsFiles)