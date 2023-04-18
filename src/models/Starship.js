const mongoose = require("mongoose");

const starshipSchema = new mongoose.Schema(
  {
    name: { type: String },
    model: { type: String },
    manufacturer: { type: String },
    cost_in_credits: { type: Number },
    length: { type: Number },
    max_atmosphering_speed: { type: Number },
    crew: { type: String },
    passengers: { type: Number },
    cargo_capacity: { type: Number },
    consumables: { type: String },
    hyperdrive_rating: { type: Number },
    MGLT: { type: Number },
    starship_class: { type: String },
  },
  { timestamp: false, versionKey: false }
);

module.exports = mongoose.model("Starship", starshipSchema);
