// /server/src/app.js

const express = require("express");
const cors = require("cors");
const linkRoutes = require("./routes/link.routes.js");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", linkRoutes);

module.exports = app;
