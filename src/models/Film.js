const mongoose = require("mongoose");

const filmSchema = new mongoose.Schema(
  {
    title: { type: String },
    episode_id: { type: Number },
    opening_crawl: { type: String },
    director: { type: String },
    producer: { type: String },
    release_date: { type: Date },
  },
  { timestamp: false, versionKey: false }
);

module.exports = mongoose.model("Film", filmSchema);
