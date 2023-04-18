const { Router } = require("express");
const {
  getPlanets,
  getPlanetsById,
  createPlanets,
  updatePlanetsById,
  deletePlanetsById,
} = require("../controllers/planetsController");

const planetsRouter = Router();

planetsRouter.get("/", getPlanets);
planetsRouter.get("/:id", getPlanetsById);
planetsRouter.post("/", createPlanets);
planetsRouter.put("/:id", updatePlanetsById);
planetsRouter.delete("/:id", deletePlanetsById);

module.exports = planetsRouter;
