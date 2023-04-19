const { Router } = require("express");
const {
  getFilms,
  getFilmById,
  createFilm,
  updateFilmById,
  deleteFilmById,
} = require("../controllers/filmsController");

const filmsRouter = Router();

/**
 * @swagger
 * /films:
 *   get:
 *     tags:
 *       - Films
 *     summary: Returns all existing films.
 *     responses:
 *       200:
 *         description: OK
 */

filmsRouter.get("/", getFilms);

/**
 * @swagger
 * /films/{id}:
 *   get:
 *     tags:
 *       - Films
 *     summary: Returns film by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the film.
 *         required: true
 *         schema:
 *           type: string
 *         example: 644031e789b6cd7a2e5d8b6e
 *     responses:
 *       200:
 *         description: OK
 *       404:
 *         description: Not found
 */

filmsRouter.get("/:id", getFilmById);

/**
 * @swagger
 * /films:
 *   post:
 *     tags:
 *       - Films
 *     summary: Create a new Star Wars film.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               episode_id:
 *                 type: number
 *               opening_crawl:
 *                 type: string
 *               director:
 *                 type: string
 *               producer:
 *                 type: string
 *               release_date:
 *                 type: string
 *             required:
 *               - title
 *               - episode_id
 *               - director
 *     responses:
 *       200:
 *         description: OK
 */

filmsRouter.post("/", createFilm);

/**
 * @swagger
 * /films/{id}:
 *   put:
 *     tags:
 *       - Films
 *     summary: Update a Star Wars film.
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the film to be updated.
 *         required: true
 *         schema:
 *           type: string
 *         example: 644031e789b6cd7a2e5d8b6e
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               episode_id:
 *                 type: number
 *               opening_crawl:
 *                 type: string
 *               director:
 *                 type: string
 *               producer:
 *                 type: string
 *               release_date:
 *                 type: string
 *             required:
 *               - title
 *               - episode_id
 *               - director
 *     responses:
 *       200:
 *         Links: No links
 *       404:
 *         Description: Not found
 */

filmsRouter.put("/:id", updateFilmById);

/**
 * @swagger
 * /films/{id}:
 *   delete:
 *     tags:
 *      - Films
 *     summary: Delete a Star Wars film.
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the film to be deleted.
 *         required: true
 *         schema:
 *           type: string
 *         example: 644031e789b6cd7a2e5d8b6e
 *     responses:
 *       200:
 *         Links: No links
 *       404:
 *         Description: Not found
 */

filmsRouter.delete("/:id", deleteFilmById);

module.exports = filmsRouter;
