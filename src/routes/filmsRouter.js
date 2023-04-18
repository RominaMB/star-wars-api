const { Router } = require("express");
const { getFilms, getFilmById } = require("../controllers/filmsController");

const filmsRouter = Router();

filmsRouter.get("/", getFilms);
filmsRouter.get("/:id", getFilmById);
// filmsRouter.post("/", postFilm);
// filmsRouter.put("/:id", putFilm);
// filmsRouter.delete("/:id", deleteFilm);

module.exports = filmsRouter;
