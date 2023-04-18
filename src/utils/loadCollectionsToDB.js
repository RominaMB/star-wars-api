const fs = require("fs").promises;
const Film = require("../models/Film");
const Planet = require("../models/Planet");
const Starship = require("../models/Starship");

const loadCollectionsToDB = async () => {
  try {
    const [films, planets, starships] = await Promise.all([
      fs.readFile("./collections/films.json", "utf8").then(JSON.parse),
      fs.readFile("./collections/planets.json", "utf8").then(JSON.parse),
      fs.readFile("./collections/starships.json", "utf8").then(JSON.parse),
    ]);

    await Film.create(films);
    await Planet.create(planets);
    await Starship.create(starships);

    console.log("Database updated successfully");
  } catch (error) {
    console.log(error);
  }
};

module.exports = loadCollectionsToDB;
