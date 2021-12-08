const express = require("express");
const {
  crowdfundings,
  crowdfundingsPost,
  crowdfundingsEdit,
} = require("../../controllers/v1/crowdfundings");
const auth = require("../../middleware/auth");

const route = express.Router();

route.get("/crowdfundings", auth, crowdfundings);
route.post("/crowdfundings", auth, crowdfundingsPost);
route.put("/crowdfundings/:id", auth, crowdfundingsEdit);

module.exports = route;
