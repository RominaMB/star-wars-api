const { Router } = require("express");
const { getFilms, getFilmById } = require("../controllers/filmsController");

const filmsRouter = Router();

filmsRouter.get("/", getFilms);
filmsRouter.get("/:id", getFilmById);

module.exports = filmsRouter;
