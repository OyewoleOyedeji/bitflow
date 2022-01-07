const express = require("express");
const router = express.Router();
const hash = require("object-hash");
const nodemailer = require("nodemailer");
require("dotenv").config();

// Generate public ID
const publicId = hash(process.env.GMAIL_ID + process.env.GMAIL_PASSWORD);

/** Print out the publicId on
 * development and testing environments
 */
if (process.env.NODE_ENV !== "production") {
  console.log();
  console.log("Public ID -> " + publicId);
  console.log("Make sure to keep this secret ...");
  console.log();
}

// Generate private ID
const privateId = hash(publicId);

let outputJSON = {}

router.route("/").get(function (req, res) {
  res.statusCode = 405;
  outputJSON.code = res.statusCode;
  outputJSON.reason = "Sorry /api/ route doesn't support " + req.method.toUpperCase() + " requests";
  outputJSON.supportedMethods = ["POST"];
  res.json(outputJSON);
}).put(function (req, res) {
  res.statusCode = 405;
  outputJSON.code = res.statusCode;
  outputJSON.reason = "Sorry /api/ route doesn't support " + req.method.toUpperCase() + " requests";
  outputJSON.supportedMethods = ["POST"];
  res.json(outputJSON);
}).patch(function (req, res) {
  res.statusCode = 405;
  outputJSON.code = res.statusCode;
  outputJSON.reason = "Sorry /api/ route doesn't support " + req.method.toUpperCase() + " requests";
  outputJSON.supportedMethods = ["POST"];
  res.json(outputJSON);
}).delete(function (req, res) {
  res.statusCode = 405;
  outputJSON.code = res.statusCode;
  outputJSON.reason = "Sorry /api/ route doesn't support " + req.method.toUpperCase() + " requests";
  outputJSON.supportedMethods = ["POST"];
  res.json(outputJSON);
}).post(function (req, res) {
  // Get X-PUBLIC-ID header (if any)
  const publicIdHeader = req.headers["x-public-id"];

  // Reset global outputJSON variable
  outputJSON = {}

  console.log(req.body);

  // Check if the X-PUBLIC-ID is valid in request
  if (publicIdHeader === undefined) {
    res.statusCode = 401;
    outputJSON.code = res.statusCode;
    outputJSON.reason = "Couldn't find the X-PUBLIC-ID header";
    res.json(outputJSON);
  } else {
    const publicDigest = hash(publicIdHeader);

    if (publicDigest === privateId) {
      // Create nodemailer transporter with config from the environment
      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.GMAIL_ID,
          pass: process.env.GMAIl_PASSWORD,
        },
      });

      // Options to be passed to the email
      let mailOptions = {
        from: process.env.GMAIL_ID,
        to: process.env.GMAIl_ID,
        subject: "New message from Bitflow",
        text: "New email from Bitflow on " + new Date(),
      };

      // Send the mail and await error or response
      transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
          res.status(500)
          outputJSON.code = res.statusCode;
          outputJSON.reason = err;
          res.json(outputJSON);
        } else {
          res.status(200).json({
            response: data.response,
            messageId: data.messageId,
          });
        }
      });

    } else {
      res.statusCode = 401;
      outputJSON.code = res.statusCode;
      outputJSON.reason = "Unauthorized request";
      res.json(outputJSON);
    }
  }
});

module.exports = router;
