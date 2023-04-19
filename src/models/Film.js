const mongoose = require("mongoose");

const filmSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    episode_id: { type: Number, required: true },
    opening_crawl: { type: String },
    director: { type: String, required: true },
    producer: { type: String },
    release_date: { type: String },
  },
  { timestamp: false, versionKey: false }
);

module.exports = mongoose.model("Film", filmSchema);
