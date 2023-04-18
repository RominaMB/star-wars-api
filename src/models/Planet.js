const mongoose = require("mongoose");

const planetSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    rotation_period: { type: Number },
    orbital_period: { type: Number },
    diameter: { type: Number, required: true },
    climate: { type: String, required: true },
    gravity: { type: String },
    terrain: { type: String },
    surface_water: { type: String },
    population: { type: String },
  },
  { timestamp: false, versionKey: false }
);

module.exports = mongoose.model("Planet", planetSchema);
