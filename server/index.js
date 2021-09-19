const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const swaggerJSDoc = require("swagger-jsdoc");
const SwaggerUI = require("swagger-ui-express");
const authRouter = require("./api/routes/AuthRouter");
const vendorRouter = require("./api/routes/VendorRouter");
require("dotenv").config();

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());



const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "E-Pharmacy API",
      version: "1.0.0",
      description: "API for e-pharmacy",
    },
    servers: ["http://localhost:4000/"],
    // servers: [
    //   {
    //     url: "http://localhost:4000/",
    //   },
    // ],
  },
  apis:['.routes/*.js']
  // apis:["app.js"]
};

const specs = swaggerJSDoc(swaggerOptions);

app.use("/api-docs", SwaggerUI.serve, SwaggerUI.setup(specs));

// routers
app.use("/auth", authRouter);
app.use("/vendor/auth", vendorRouter);

app.get("/", (req, res) => res.send("welcome our app"));


const CONNECTION_URL = process.env.MONGODB_CONNECTION_URL_PAST;
const PORT = process.env.PORT || 4000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set("useFindAndModify", false);
