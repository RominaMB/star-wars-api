const mongoose = require("mongoose");
const Film = require("../models/Film");
const loadCollectionsToDB = require("../utils/loadCollectionsToDB");

const dbConnect = () => {
  const DB_URI = process.env.DB_URI;
  mongoose
    .connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB Atlas"))
    .then(async () => {
      console.log("Checking if there is data in the DB...");
      const film = await Film.findOne({});
      if (film) {
        console.log("Data is already in the DB");
      } else {
        await loadCollectionsToDB();
        console.log("Data loaded into DB successfully");
      }
    })
    .catch((error) => {
      console.error(`DB connection error: ${error.message}`);
      process.exit(1);
    });
};

module.exports = dbConnect;
