const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.json({
    message: "Bitflow Backend",
    description: "An API hosted on Vercel",
    repository: 'https://github.com/OyewoleOyedeji/bitflow.git'
  });
});

module.exports = router;
