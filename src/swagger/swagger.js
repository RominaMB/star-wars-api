const swaggerUi = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");

// Metadata info sobre API

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Star Wars API",
      version: "v1.0",
      description: "Developed by RominaMB",
    },
    basePath: "/",
  },
  apis: ["src/routes/*.js"],
};

// Docs en JSON format

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app, port) => {
  app.use(
    "/api/v1/docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec, {
      customSiteTitle: "Star Wars API | RominaMB",
    })
  );
  app.get("/api/v1/docs.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.sebd(swaggerSpec);
  });
  console.log(`Docs are available at http://localhost:${port}/api/v1/docs`);
};

module.exports = { swaggerDocs };
