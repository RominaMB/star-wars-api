const { Router } = require("express");
const {
  getStarships,
  getStarshipById,
  createStarship,
  updateStarshipById,
  deleteStarshipById,
} = require("../controllers/starshipsController");

const starshipsRouter = Router();

/**
 * @swagger
 * /starships:
 *   get:
 *     tags:
 *       - Starships
 *     summary: Returns all existing starships.
 *     responses:
 *       200:
 *         description: OK
 */

starshipsRouter.get("/", getStarships);

/**
 * @swagger
 * /starships/{id}:
 *   get:
 *     tags:
 *       - Starships
 *     summary: Returns starship by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the starship.
 *         required: true
 *         schema:
 *           type: string
 *         example: 644031ea89b6cd7a2e5d8b91
 *     responses:
 *       200:
 *         description: OK
 *       404:
 *         description: Not found
 */

starshipsRouter.get("/:id", getStarshipById);

/**
 * @swagger
 * /starships:
 *   post:
 *     tags:
 *       - Starships
 *     summary: Create a new Star Wars starship.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               model:
 *                 type: string
 *               manufacturer:
 *                 type: string
 *               cost_in_credits:
 *                 type: string
 *               length:
 *                 type: string
 *               max_atmosphering_speed:
 *                 type: string
 *               crew:
 *                 type: string
 *               passengers:
 *                 type: string
 *               cargo_capacity:
 *                 type: string
 *               consumables:
 *                 type: string
 *               hyperdrive_rating:
 *                 type: string
 *               MGLT:
 *                 type: string
 *               starship_class:
 *                 type: string
 *             required:
 *               - name
 *               - model
 *               - manufacturer
 *     responses:
 *       200:
 *         description: OK
 */

starshipsRouter.post("/", createStarship);

/**
 * @swagger
 * /starships/{id}:
 *   put:
 *     tags:
 *       - Starships
 *     summary: Update a Star Wars starship.
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the starship to be updated.
 *         required: true
 *         schema:
 *           type: string
 *         example: 644031ea89b6cd7a2e5d8b91
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               model:
 *                 type: string
 *               manufacturer:
 *                 type: string
 *               cost_in_credits:
 *                 type: string
 *               length:
 *                 type: string
 *               max_atmosphering_speed:
 *                 type: string
 *               crew:
 *                 type: string
 *               passengers:
 *                 type: string
 *               cargo_capacity:
 *                 type: string
 *               consumables:
 *                 type: string
 *               hyperdrive_rating:
 *                 type: string
 *               MGLT:
 *                 type: string
 *               starship_class:
 *                 type: string
 *             required:
 *               - name
 *               - model
 *               - manufacturer
 *     responses:
 *       200:
 *         description: No links
 *       404:
 *         description: Not found
 */

starshipsRouter.put("/:id", updateStarshipById);

/**
 * @swagger
 * /starships/{id}:
 *   delete:
 *     tags:
 *      - Starships
 *     summary: Delete a Star Wars starship.
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the starship to be deleted.
 *         required: true
 *         schema:
 *           type: string
 *         example: 644031ea89b6cd7a2e5d8b91
 *     responses:
 *       200:
 *         Links: No links
 *       404:
 *         Description: Not found
 */

starshipsRouter.delete("/:id", deleteStarshipById);

module.exports = starshipsRouter;
