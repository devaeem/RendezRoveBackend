
import express, { Express, Request, Response } from 'express'

const app: Express = express()

const port: number = 5001

const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./docs/docs');

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

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.listen(port, () => console.log(`Application is running on port ${port}`))
