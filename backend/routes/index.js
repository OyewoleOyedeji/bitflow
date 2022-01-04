const express = require("express");
const router = express.Router();
const hash = require("object-hash");
const nodemailer = require("nodemailer");
require("dotenv").config();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.json({
    message: "Hello World",
    description: "This is self hosted on Codesandbox"
  });
});

router.get("/api", function (req, res, next) {
  res.json({
    message: "Welcome to the API",
    requestDate: new Date(),
    dateHash: hash(new Date())
  });
});

router.get("/api/send-mail", function (req, res, next) {
  res.json({
    error: "Cannot perform this request",
    statusCode: 500,
    statusDescription: "Not authorized"
  });
});

router.post("/api/send-mail", function (req, res, next) {
  const config = {
    id: process.env.GMAIL_ID,
    password: process.env.GMAIL_PASSWORD,
    passwordHash: hash(hash(process.env.GMAIL_PASSWORD))
  };
  if (req.get("X-PUBLIC-HASH")) {
    let clientHash = req.get("X-PUBLIC-HASH");
    let hashed = hash(clientHash);

    if (hashed === config.passwordHash) {
      console.log("Valid entry");
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: false,
        requireTLS: true,
        auth: {
          user: process.env.GMAIL_ID,
          pass: config.password
        },
        tls: {
          ciphers: "SSLv3"
        }
      });

      transporter.sendMail();
    } else {
      console.log("Hash has been tampered with!");
    }

    res.json({
      client: req.get("X-PUBLIC-HASH"),
      id: config.id,
      password: config.passwordHash
    });
  } else {
    res.statusCode = 100;
    res.statusMessage = "Can't accept from an invalid source";
    res.json({
      error: res.statusCode,
      description: res.statusMessage
    });
  }
});

module.exports = router;
