const { Router } = require("express");
const {
  getPlanets,
  getPlanetById,
  createPlanet,
  updatePlanetById,
  deletePlanetById,
} = require("../controllers/planetsController");

const planetsRouter = Router();

/**
 * @swagger
 * /planets:
 *   get:
 *     tags:
 *       - Planets
 *     summary: Returns all existing planets.
 *     responses:
 *       200:
 *         description: OK
 */

planetsRouter.get("/", getPlanets);

/**
 * @swagger
 * /planets/{id}:
 *   get:
 *     tags:
 *       - Planets
 *     summary: Returns planet by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the planet.
 *         schema:
 *           type: string
 *         example: 644031e889b6cd7a2e5d8b83
 *     responses:
 *       200:
 *         description: OK
 *       404:
 *         description: Not found
 */

planetsRouter.get("/:id", getPlanetById);

/**
 * @swagger
 * /planets:
 *   post:
 *     tags:
 *       - Planets
 *     summary: Create a new Star Wars planet.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               rotation_period:
 *                 type: number
 *               orbital_period:
 *                 type: number
 *               diameter:
 *                 type: number
 *               climate:
 *                 type: string
 *               gravity:
 *                 type: string
 *               terrain:
 *                 type: string
 *               surface_water:
 *                 type: string
 *               population:
 *                 type: string
 *             required:
 *               - name
 *               - diameter
 *               - climate
 *     responses:
 *       200:
 *         description: OK
 */

planetsRouter.post("/", createPlanet);

/**
 * @swagger
 * /planets/{id}:
 *   put:
 *     tags:
 *       - Planets
 *     summary: Update a Star Wars planet.
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the planet to be updated.
 *         required: true
 *         schema:
 *           type: string
 *         example: 644031e889b6cd7a2e5d8b83
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               rotation_period:
 *                 type: number
 *               orbital_period:
 *                 type: number
 *               diameter:
 *                 type: number
 *               climate:
 *                 type: string
 *               gravity:
 *                 type: string
 *               terrain:
 *                 type: string
 *               surface_water:
 *                 type: string
 *               population:
 *                 type: string
 *             required:
 *               - name
 *               - diameter
 *               - climate
 *     responses:
 *       200:
 *         Links: No links
 *       404:
 *         Description: Not found
 */

planetsRouter.put("/:id", updatePlanetById);

/**
 * @swagger
 * /planets/{id}:
 *   delete:
 *     tags:
 *      - Planets
 *     summary: Delete a Star Wars planet.
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the planet to be deleted.
 *         required: true
 *         schema:
 *           type: string
 *         example: 644031e889b6cd7a2e5d8b83
 *     responses:
 *       200:
 *         Links: No links
 *       404:
 *         Description: Not found
 */

planetsRouter.delete("/:id", deletePlanetById);

module.exports = planetsRouter;
