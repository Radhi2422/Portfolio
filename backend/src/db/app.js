const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("../api documentation/swagger.js");

// const helmet=require("helmet");
// const rateLimit=require("express-rate-limit");
// const mongoSanitize=require("express-mongo-sanitize");
// const xss=require("xss-clean");
// const hpp=require("hpp");

const authRoutes =require("../routes/authRoutes");
const problemRoutes=require("../routes/problemRoutes.js")


const requestLogger = require("../logs/requestLogger.js");

const app = express();
app.use(cors());
// app.use(helmet());

// // app.use(mongoSanitize());

// app.use(xss());

// app.use(hpp());

// app.use(rateLimit({

//     windowMs:15*60*1000,

//     max:100

// }));
app.use(express.json());
// app.use(requestLogger);
app.use("/api/auth", authRoutes);
app.use("/problems",problemRoutes)
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec)
);

module.exports = app;