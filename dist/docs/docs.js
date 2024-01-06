"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
