const mongoose = require("mongoose");

const planetSchema = new mongoose.Schema(
  {
    name: { type: String },
    rotation_period: { type: Number },
    orbital_period: { type: Number },
    diameter: { type: Number },
    climate: { type: String },
    gravity: { type: String },
    terrain: { type: String },
    surface_water: { type: String },
    population: { type: Number },
  },
  { timestamp: false, versionKey: false }
);

module.exports = mongoose.model("Planet", planetSchema);
