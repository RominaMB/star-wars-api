const Film = require("../models/Film");
const axios = require("axios");

console.log;
const getFilms = async (req, res) => {
  try {
    const films = await Film.find({});
    console.log(films);
    res.send(films || { error: "Film not found" });
  } catch (error) {
    console.log(error);
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
    res
      .status(500)
      .send({ message: "Error while retrieving films", error: error.message });
  }
};



module.exports = { getFilms, getFilmById };
