"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongo_db_1 = require("./config/mongo.db");
const app = (0, express_1.default)();
const port = 5001;
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const dotenv = require('dotenv');
const fs = require('fs');
const apiRoutes = require('./apiRoutes/apiRoutes');
require('dotenv').config();
//
(0, mongo_db_1.connectToDatabase)();
// connecttodb
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json({ limit: "20mb" }));
app.use('/api/', apiRoutes);
app.get('/', (req, res) => {
    res.send('Hello rendezrovebackendservice + TypeScirpt!!');
});
app.listen(port, () => console.log(`Application is running on port ${port}`));
