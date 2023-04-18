const Planet = require("../models/Planet");
const mongoose = require("mongoose");

console.log;
const getPlanets = async (req, res) => {
  try {
    const planets = await Planet.find({});
    console.log(planets);
    res.send(planets || { error: "Planet not found" });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

const getPlanetsById = async (req, res) => {
  try {
    const planet = await Planet.findById(req.params.id);
    if (!planet) {
      return res.status(404).json({ error: "Invalid ID" });
    }
    res.json(planet);
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error while retrieving films", error: error.message });
  }
};


module.exports = {
  getPlanets,
  getPlanetsById,
  createFilm,
  updateFilmById,
  deleteFilmById,
};
