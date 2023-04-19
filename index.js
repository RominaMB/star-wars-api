require("dotenv").config();
const server = require("./src/app.js");
const dbConnect = require("./src/config/mongo.js");
const { swaggerDocs: V1SwaggerDocs } = require("./src/swagger/swagger.js");

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log("Server listening on port", PORT);
  V1SwaggerDocs(server, PORT);
});

dbConnect();
