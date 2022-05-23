const hbs = require("hbs");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const express = require("express");
const app = express();

app.use(express.static(path.join(__dirname, "./public")));
app.use(bodyParser.json());
app.set("views", path.join(__dirname, "views"));
app.engine("html", require("hbs").__express);
app.set("view engine", "html");

app.get("/", (req, res) => res.render("index"));

app.listen(process.env.PORT || 5000, () =>
  console.log("Server is running, localhost:5000")
);
