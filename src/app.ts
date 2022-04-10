import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "US Cities API",
        version: "1.0.0",
      },
    },
    apis: ["./dist/routes/*.js"]
  };
const specs = swaggerJsdoc(options);
const swaggerRoutes = swaggerUi.setup(specs, {explorer: true});

const app = express();
app.use("/docs", swaggerUi.serve);
app.get("/docs", swaggerRoutes);

const helloRoutes = require('./routes/hello');
app.use("/hello", helloRoutes);

module.exports = app;
