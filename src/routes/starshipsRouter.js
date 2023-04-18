const { Router } = require("express");
const {
  getStarships,
  getStarshipById,
  createStarship,
  updateStarshipById,
  deleteStarshipById,
} = require("../controllers/starshipsController");

const starshipsRouter = Router();

starshipsRouter.get("/", getStarships);
starshipsRouter.get("/:id", getStarshipById);
starshipsRouter.post("/", createStarship);
starshipsRouter.put("/:id", updateStarshipById);
starshipsRouter.delete("/:id", deleteStarshipById);

module.exports = starshipsRouter;
