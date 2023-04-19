const Starship = require("../models/Starship");
const mongoose = require("mongoose");

// Devuelve todos los registros de starships existentes.
const getStarships = async (req, res) => {
  try {
    const starships = await Starship.find({});
    console.log(starships);
    res.send(starships || { error: "Starship not found" });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

// Al recibir una id, busca en la base de datos la starship con la id correspondiente y la devuelve.
const getStarshipById = async (req, res) => {
  try {
    const starship = await Starship.findById(req.params.id);
    if (!starship) {
      return res.status(404).json({ error: "Invalid ID" });
    }
    res.json(starship);
  } catch (error) {
    res.status(500).send({
      message: "Error while retrieving starship",
      error: error.message,
    });
  }
};

// Crea una starship en la base de datos.
const createStarship = async (req, res) => {
  const {
    name,
    model,
    manufacturer,
    cost_in_credits,
    length,
    max_atmosphering_speed,
    crew,
    passengers,
    cargo_capacity,
    consumables,
    hyperdrive_rating,
    MGLT,
    starship_class,
  } = req.body;

  if (!name || !model || !manufacturer) {
    return res.status(400).json({ message: "Missing required field" });
  }

  const starshipExists = await Starship.findOne({ name });
  if (starshipExists) {
    return res
      .status(400)
      .json({ message: "Starship with this name already exists" });
  }

  const newStarship = new Starship({
    name,
    model,
    manufacturer,
    cost_in_credits,
    length,
    max_atmosphering_speed,
    crew,
    passengers,
    cargo_capacity,
    consumables,
    hyperdrive_rating,
    MGLT,
    starship_class,
  });

  try {
    const createdStarship = await newStarship.save();
    return res
      .status(201)
      .send(`Starship successfully created. ID: ${createdStarship._id}`);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error while creating starship",
      error: error.message,
    });
  }
};

// Al recibir una id, busca en la base de datos la starship con la id correspondiente, lo actualiza y devuelve la starship actualizado.
const updateStarshipById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ error: "Invalid starship ID" });
  }

  try {
    const updatedStarship = await Starship.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedStarship) {
      return res.status(404).json({ error: "Starship not found" });
    }
    res.json({ message: "Starship successfully updated", updatedStarship });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error while updating starship" });
  }
};

// Al recibir una id, busca en la base de datos la starship con la id correspondiente, la elimina y devuelve un mensaje de éxito.
const deleteStarshipById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ error: "Invalid starship ID" });
  }

  try {
    const deletedStarship = await Starship.findByIdAndDelete(id);
    if (!deletedStarship) {
      return res.status(404).json({ error: "Starship not found" });
    }
    res.json({ message: "Starship successfully deleted", deletedStarship });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error while deleting starship" });
  }
};

module.exports = {
  getStarships,
  getStarshipById,
  createStarship,
  updateStarshipById,
  deleteStarshipById,
};
