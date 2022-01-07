const express = require("express");
const router = express.Router();
require("dotenv").config();

let outputJSON = {};

/* Base route chain */
router.route("/")
  .get(function (req, res, next) {
    outputJSON.madeFor = "Bitflow";
    outputJSON.shortDescription = "Email sending API";
    outputJSON.description = "Just another API for sending emails to your inbox, which was hosted on " + process.env.HOST;
    outputJSON.codeRepository = "https://github.com/OyewoleOyedeji/bitflow.git";

    if (req.headers["x-public-id"]) {
      outputJSON.suggestion =
        "No need to include the X-PUBLIC-ID header for this route";
      res.json(outputJSON);
    } else {
      res.json(outputJSON);
    }
  })
  .post(function (req, res, next) {
    res.statusCode = 405;
    outputJSON.code = res.statusCode;
    outputJSON.reason = "Sorry base route doesn't support POST requests";
    outputJSON.supportedMethods = ["POST"];
    res.json(outputJSON);
  })
  .put(function (req, res, next) {
    res.statusCode = 405;
    outputJSON.code = res.statusCode;
    outputJSON.reason = "Sorry base route doesn't support " + req.method.toUpperCase() + " requests";
    outputJSON.supportedMethods = ["POST"];
    res.json(outputJSON);
  })
  .patch(function (req, res, next) {
    res.statusCode = 405;
    outputJSON.code = res.statusCode;
    outputJSON.reason = "Sorry base route doesn't support " + req.method.toUpperCase() + " requests";
    outputJSON.supportedMethods = ["POST"];
    res.json(outputJSON);
  })
  .delete(function (req, res, next) {
    res.statusCode = 405;
    outputJSON.code = res.statusCode;
    outputJSON.reason = "Sorry base route doesn't support " + req.method.toUpperCase() + " requests";
    outputJSON.supportedMethods = ["POST"];
    res.json(outputJSON);
  });

module.exports = router;
