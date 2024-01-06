
import express, { Express, Request, Response } from 'express'
import { uuid } from 'uuidv4';


const app: Express = express()
const port: number = 5001
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const dotenv = require('dotenv')
const fs = require('fs');
const { readdirSync } = require("fs");
const apiRoutes = require('./apiRoutes/apiRoutes');


app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json({ limit: "20mb" }));
require('dotenv').config()

app.use('/api/', apiRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send(
    'Hello rendezrovebackendservice + TypeScirpt!!',
  )
})













app.listen(port, () => console.log(`Application is running on port ${port}`))
