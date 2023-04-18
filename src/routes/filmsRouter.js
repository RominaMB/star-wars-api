const { Router } = require("express");
const {
  getFilms,
  getFilmById,
  createFilm,
  updateFilmById,
  deleteFilmById,
} = require("../controllers/filmsController");

const filmsRouter = Router();

filmsRouter.get("/", getFilms);
filmsRouter.get("/:id", getFilmById);
filmsRouter.post("/", createFilm);
filmsRouter.put("/:id", updateFilmById);
filmsRouter.delete("/:id", deleteFilmById);

module.exports = filmsRouter;
