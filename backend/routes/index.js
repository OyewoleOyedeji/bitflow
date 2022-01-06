const express = require("express");
const router = express.Router();
require('dotenv').config()

/* GET home page. */
router.get("/", function (req, res, next) {
  if (req.headers['x-public-id']) {
    res.json({
      madeFor: 'Bitflow',
      shortDescription: "Email sending API",
      description: "Just another API for sending emails to your inbox, which was hosted on " + process.env.HOST,
      codeRepository: 'https://github.com/OyewoleOyedeji/bitflow.git',
      suggestion: 'No need to include the X-PUBLIC-ID header for this route'
    });
  } else {
    res.json({
      madeFor: 'Bitflow',
      shortDescription: "Email sending API",
      description: "Just another API for sending emails to your inbox, which was hosted on " + process.env.HOST,
      codeRepository: 'https://github.com/OyewoleOyedeji/bitflow.git'
    });
  }
});

module.exports = router;
