const express = require("express");
const { sineUp, login, makeAdmin } = require("../controllers/AuthController");

const vendorRouter = express.Router();


vendorRouter.post("/sineUp", sineUp);

vendorRouter.post("/login", login);

module.exports = vendorRouter;
