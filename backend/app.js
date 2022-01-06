const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const https = require('https');
const fs = require('fs');

const indexRouter = require("./routes/index");
const apiRouter = require("./routes/api");

const app = express();

const options = {
  cert: fs.readFileSync('./cert.pem', 'utf8'),
  key: fs.readFileSync('./key.pem', 'utf8')
}

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/api", apiRouter);

if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'production') {
  var listener = app.listen(process.env.PORT || 8080, function () {
    console.log("Listening on port " + process.env.PORT || 8080);
  });
} else if (process.env.NODE_ENV === 'testing') {
  https.createServer(options, app).listen(process.env.PORT || 8080, () => {
    console.log("Listening on port " + process.env.PORT || 8080);
  });
}
