var express = require("express");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var https = require('https');
var fs = require('fs');

var indexRouter = require("./routes/index");
var apiRouter = require("./routes/api");

var app = express();

var options = {
  cert: fs.readFileSync('./cert.pem', 'utf8'),
  key: fs.readFileSync('./key.pem', 'utf8')
}

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/api", apiRouter);

if (process.env.NODE_ENV === 'development') {
  var listener = app.listen(process.env.PORT || 8080, function () {
    console.log("Listening on port " + process.env.PORT || 8080);
  });
} else if (process.env.NODE_ENV === 'staging') {
  https.createServer(options, app).listen(process.env.PORT || 8080, () => {
    console.log("Listening on port " + process.env.PORT || 8080);
  });
}
