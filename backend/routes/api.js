const express = require("express");
const router = express.Router();
const hash = require("object-hash");
const nodemailer = require('nodemailer');
require('dotenv').config();

// Generate public ID
const publicId = hash(process.env.GMAIL_ID + process.env.GMAIL_PASSWORD)

if (process.env.NODE_ENV !== 'production') {
  console.log()
  console.log('Public ID -> ' + publicId)
  console.log('Make sure to keep this secret ...')
  console.log()
}

// Generate private ID
const privateId = hash(publicId)

// GET /api/ route
router.get("/", (req, res, next) => {
  res.statusCode = 405
  res.statusMessage = "Sorry /api/ route doesn't support GET requests"
  res.json({
    code: res.statusCode,
    message: res.statusMessage,
    supportedMethod: [
      'POST'
    ]
  })
})

// POST /api/ route
router.post("/", (req, res, next) => {
  const publicIdHeader = req.headers['x-public-id']

  console.log(req);

  if (publicIdHeader !== '') {
    if (publicIdHeader === undefined) {
      res.statusCode = 401;
      res.statusMessage = "Couldn't find the X-PUBLIC-ID header";
      res.json({
        code: res.statusCode,
        message: res.statusMessage,
        suggestion: "Include the X-PUBLIC-ID header for the next request"
      });
    } else {
      const publicDigest = hash(publicIdHeader);

      if (publicDigest === privateId) {
        // Create nodemailer transported with below config
        let transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.GMAIL_ID,
            pass: process.env.GMAIl_PASSWORD,
          }
        });

        // Options to be passed to the email
        let mailOptions = {
          from: process.env.GMAIL_ID,
          to: process.env.GMAIl_ID,
          subject: 'New message from Bitflow',
          text: message
        };

        // Send the mail and await error or response
        transporter.sendMail(mailOptions, function (err, data) {
          if (err) {
            res.json({
              error: err
            });
          } else {
            console.log("Email sent successfully");
            res.status(200).json(data)
          }
        })
      } else {
        res.statusCode = 401
        res.statusMessage = "Authorization header has been tempered with"
        res.json({
          code: res.statusCode,
          message: res.statusMessage,
          suggestion: "Sorry there is no suggestion for this issue"
        })
      }
    }
  } else {
    res.statusCode = 401;
    res.statusMessage = "Not authorized to peform this action"
    res.json({
      code: res.statusCode,
      message: res.statusMessage,
      suggestion: 'Try checking the X-PUBLIC-ID header is not empty'
    })
  }
})

module.exports = router