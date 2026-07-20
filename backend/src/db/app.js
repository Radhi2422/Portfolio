const express = require("express");
const cors = require("cors");


const projectRoutes=require("../routes/projectRoutes.js");
const errorHandler = require("../middleware/errorHandler.js")


const app = express();
app.use(cors());
app.use(express.json());
app.use("/projects",projectRoutes);


app.use(errorHandler);

module.exports = app;