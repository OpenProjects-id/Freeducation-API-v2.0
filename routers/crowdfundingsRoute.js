const express = require('express');
const route = express.Router();
const { crowdfundings } = require('../controllers/crowdfundingsController');

route.get('/crowdfundings', crowdfundings);

module.exports = route;
