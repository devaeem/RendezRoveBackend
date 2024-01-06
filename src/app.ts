
import express, { Express, Request, Response } from 'express'

const app: Express = express()

const port: number = 5001

app.get('/', (req: Request, res: Response) => {
  res.send(
    'Hello rendezrovebackendservice + TypeScirpt!!',
  )
})

app.listen(port, () => console.log(`Application is running on port ${port}`))
