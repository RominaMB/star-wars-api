const { Router } = require("express");
const router = Router(); // main router

const filmsRouter = require("./filmsRouter");
const planetsRouter = require("./planetsRouter");
// const starshipsRouter = require("./starshipsRouter");

router.get("/", (req, res) => {
  res.send("Welcome to my API");
});

router.use("/films", filmsRouter);
router.use("/planets", planetsRouter);
// router.use("/starships", starshipsRouter);

module.exports = router;
