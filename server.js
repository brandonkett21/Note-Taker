var express = require("express");
var apiRoute = require("./routes/apiRoute");
var htmlRoute = require("./routes/htmlRoute");

var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use("/api", apiRoute);
app.use("/", htmlRoute);

app.listen(PORT, function () {
  console.log(`App listening on http://localhost:${PORT}`);
});
