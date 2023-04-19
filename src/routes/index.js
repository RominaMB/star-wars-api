const { Router } = require("express");
const router = Router(); // main router

const filmsRouter = require("./filmsRouter");
const planetsRouter = require("./planetsRouter");
const starshipsRouter = require("./starshipsRouter");

router.use("/films", filmsRouter);
router.use("/planets", planetsRouter);
router.use("/starships", starshipsRouter);

router.get("/", (req, res) => {
  res.send(`
    <style>
      body {
        font-family: sans-serif, Open Sans;
        background-color: #F5F5F5;
      }
      h1 {
        color: #89bf04;
        font-size: 48px;
        text-align: center;
        margin-top: 50px
      }

      h4 {
        color: #333;
        font-size: 12px;
        text-align: center;
        margin: 20px 0;
      }

      p {
        color: #333;
        font-size: 24px;
        text-align: center;
        margin: 20px 0;
      }
    </style>

    <h1>Welcome to Star Wars API! 🚀 </h1>
    <p>Check out our documentation <a href="https://star-wars-api.up.railway.app/v1/docs">here</a> for more information.</p>
    <h4>Developed By RominaMB</h4>
  `);
});

module.exports = router;
