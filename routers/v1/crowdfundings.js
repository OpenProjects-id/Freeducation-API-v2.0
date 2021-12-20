const express = require("express");
const {
  crowdfundings,
  crowdfundingsPost,
  crowdfundingsEdit,
} = require("../../controllers/v1/crowdfundings");
const auth = require("../../middleware/auth");

const route = express.Router();

route.get("/", auth, crowdfundings);
route.post("/", auth, crowdfundingsPost);
route.put("/:id", auth, crowdfundingsEdit);

module.exports = route;
