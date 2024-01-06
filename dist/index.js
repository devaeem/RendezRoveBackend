"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 5001;
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const dotenv = require('dotenv');
const fs = require('fs');
const { readdirSync } = require("fs");
const apiRoutes = require('./apiRoutes/apiRoutes');
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json({ limit: "20mb" }));
require('dotenv').config();
app.use('/api/', apiRoutes);
app.get('/', (req, res) => {
    res.send('Hello rendezrovebackendservice + TypeScirpt!!');
});
app.listen(port, () => console.log(`Application is running on port ${port}`));
