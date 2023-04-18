const { Film } = require("../models/Film");
const axios = require("axios");

const getFilms = async (req, res) => {
  try {
    const films = await Film.find({});
    res.send(films || { error: "Film not found" });
  } catch (error) {
    res.status(500).send(error);
  }
};

const getFilmById = async (req, res) => {
  try {
    const film = await Film.findById(req.params.id);
    if (!film) {
      return res.status(404).json({ error: "Invalid ID" });
    }
    res.json(film);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { getFilms, getFilmById };
