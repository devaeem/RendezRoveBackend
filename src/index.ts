
import express, { Express, Request, Response } from 'express'

const app: Express = express()

const port: number = 5001

const swaggerUi = require('swagger-ui-express');

app.get('/', (req: Request, res: Response) => {
  res.send(
    'Hello rendezrovebackendservice + TypeScirpt!!',
  )
})

app.get('/test', (req: Request, res: Response) => {
  res.json(
    {data:'test'}
  )
})
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
      title: 'rendezrove API ',
      version: '1.0.0',
    },
  };
  
  const options = {
    swaggerDefinition,
    // Paths to files containing OpenAPI definitions
    apis: ['./routes/*.ts'],
  };
  
  const swaggerSpec = swaggerJSDoc(options);

  module.exports = swaggerSpec;

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.listen(port, () => console.log(`Application is running on port ${port}`))
