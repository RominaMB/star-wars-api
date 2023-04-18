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
      .send({ message: "Error while retrieving planet", error: error.message });
  }
};

const createPlanet = async (req, res) => {
  const {
    name,
    rotation_period,
    orbital_period,
    diameter,
    climate,
    gravity,
    terrain,
    surface_water,
    population,
  } = req.body;

  if (!name || !diameter || !climate) {
    return res.status(400).json({ message: "Missing required field" });
  }

  const planetExists = await Planet.findOne({ name });
  if (planetExists) {
    return res
      .status(400)
      .json({ message: "Planet with this name already exists" });
  }

  const newPlanet = new Planet({
    name,
    rotation_period,
    orbital_period,
    diameter,
    climate,
    gravity,
    terrain,
    surface_water,
    population,
  });

  try {
    const createdPlanet = await newPlanet.save();
    return res
      .status(201)
      .send(`Planet successfully created. ID: ${createdPlanet._id}`);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error while creating planet",
      error: error.message,
    });
  }
};

const updatePlanetById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ error: "Invalid planet ID" });
  }

  try {
    const updatedPlanet = await Planet.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedPlanet) {
      return res.status(404).json({ error: "Planet not found" });
    }
    res.json({ message: "Planet successfully updated", updatedPlanet });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error while updating planet" });
  }
};

const deletePlanetById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ error: "Invalid planet ID" });
  }

  try {
    const deletedPlanet = await Planet.findByIdAndDelete(id);
    if (!deletedPlanet) {
      return res.status(404).json({ error: "Planet not found" });
    }
    res.json({ message: "Planet successfully deleted", deletedPlanet });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error while deleting planet" });
  }
};

module.exports = {
  getPlanets,
  getPlanetsById,
  createPlanet,
  updatePlanetById,
  deletePlanetById,
};
