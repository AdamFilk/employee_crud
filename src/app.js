const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
require("./db/mongoose");

const employeeRouter = require("./routes/employeeRoutes");
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(employeeRouter);

module.exports = app;
