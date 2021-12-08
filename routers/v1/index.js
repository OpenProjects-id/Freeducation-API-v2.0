const express = require("express");
const userRoute = require("./user");
const crowdfundingsRoute = require("./crowdfundings");

const v1 = express.Router();

v1.use("/users", userRoute);
v1.use("/crowdfundings", crowdfundingsRoute);

module.exports = v1;
