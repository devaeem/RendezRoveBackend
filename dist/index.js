"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 5001;
const swaggerUi = require('swagger-ui-express');
app.get('/', (req, res) => {
    res.send('Hello rendezrovebackendservice + TypeScirpt!!');
});
app.get('/test', (req, res) => {
    res.json({ data: 'test' });
});
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
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.listen(port, () => console.log(`Application is running on port ${port}`));
