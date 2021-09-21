const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const authRouter = require("./api/routers/AuthRouter");
const categoryRouter = require("./api/routers/CategoryRouter");
const vendorRouter = require("./api/routers/VendorAuthRouter");
const shopRouter = require("./api/routers/ShopRouter");

require("dotenv").config();

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "E-Pharmacy API",
			version: "1.0.0",
			description: "E-Pharmacy API documentation",
		},
		servers: [
			{
				url: "http://localhost:4000/",
			},
			{
				url: "https://e-pharmacy-by-triggermindscape.herokuapp.com",
			},
		],
	},
	apis: ["./api/routers/*.js"],
};

const specs = swaggerJsDoc(options);

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

// routers

//auth routers
app.use("/auth", authRouter);
app.use("/vendor/auth", vendorRouter);

//category
app.use("/category", categoryRouter);
//shop
app.use("/shop", shopRouter);

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
