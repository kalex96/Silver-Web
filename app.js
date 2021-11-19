const express = require("express");
const app = express();
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");
const { mongoose } = require("./database");

// Settings
app.set("port", process.env.PORT || 3000);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// Routes
app.use("/usuarios", require("./rutas/usuarios"));

// Static files
//app.use(express.static(path.join(__dirname, "public")));

// Starting the server
app.get("/usuarios", function (req, res, next) {
  res.json({ msg: "This is CORS-enabled for all origins!" });
});

app.listen(app.get('port'), function () {
  console.log("CORS-enabled web server listening on port 3000");
});