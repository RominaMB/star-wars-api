const Film = require("../models/Film");
const mongoose = require("mongoose");

// Devuelve todos los registros de films existentes.
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

// Al recibir una id, busca en la base de datos el film con la id correspondiente y lo devuelve.
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
      .send({ message: "Error while retrieving film", error: error.message });
  }
};

// Crea un film en la base de datos.
const createFilm = async (req, res) => {
  const { title, episode_id, director, opening_crawl, producer, release_date } =
    req.body;

  if (!title || !episode_id || !director) {
    return res.status(400).json({ message: "Missing required field" });
  }

  if (episode_id >= 1 && episode_id <= 6) {
    return res.status(400).json({
      message: "Episode_id must be greater than 6", // Debe ser mayor a 6 (películas principales).
    });
  }

  const newFilm = new Film({
    title,
    episode_id,
    director,
    opening_crawl,
    producer,
    release_date,
  });

  try {
    const createdFilm = await newFilm.save();
    return res
      .status(201)
      .send(`Film successfully created. ID: ${createdFilm._id}`);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error while creating film",
      error: error.message,
    });
  }
};

// Al recibir una id, busca en la base de datos el film con la id correspondiente, lo actualiza y devuelve el film actualizado.
const updateFilmById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ error: "Invalid film ID" });
  }

  try {
    const updatedFilm = await Film.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedFilm) {
      return res.status(404).json({ error: "Film not found" });
    }
    res.json({ message: "Film successfully updated", updatedFilm });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error while updating film" });
  }
};

// Al recibir una id, busca en la base de datos el film con la id correspondiente, lo elimina y devuelve un mensaje de éxito.
const deleteFilmById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ error: "Invalid film ID" });
  }

  try {
    const deletedFilm = await Film.findByIdAndDelete(id);
    if (!deletedFilm) {
      return res.status(404).json({ error: "Film not found" });
    }
    res.json({ message: "Film successfully deleted", deletedFilm });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error while deleting film" });
  }
};

module.exports = {
  getFilms,
  getFilmById,
  createFilm,
  updateFilmById,
  deleteFilmById,
};
