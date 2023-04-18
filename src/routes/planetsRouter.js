const { Router } = require("express");
const {
  getPlanets,
  getPlanetById,
  createPlanet,
  updatePlanetById,
  deletePlanetById,
} = require("../controllers/planetsController");

const planetsRouter = Router();

planetsRouter.get("/", getPlanets);
planetsRouter.get("/:id", getPlanetById);
planetsRouter.post("/", createPlanet);
planetsRouter.put("/:id", updatePlanetById);
planetsRouter.delete("/:id", deletePlanetById);

module.exports = planetsRouter;
