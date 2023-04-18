const mongoose = require("mongoose");

const starshipSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    model: { type: String, required: true },
    manufacturer: { type: String, required: true },
    cost_in_credits: { type: String },
    length: { type: String },
    max_atmosphering_speed: { type: String },
    crew: { type: String },
    passengers: { type: String },
    cargo_capacity: { type: String },
    consumables: { type: String },
    hyperdrive_rating: { type: String },
    MGLT: { type: String },
    starship_class: { type: String },
  },
  { timestamp: false, versionKey: false }
);

module.exports = mongoose.model("Starship", starshipSchema);
