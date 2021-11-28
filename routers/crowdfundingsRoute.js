const express = require('express');
const route = express.Router();
const { crowdfundings, crowdfundingsPost, wadaww } = require('../controllers/crowdfundingsController');

route.get('/crowdfundings', crowdfundings);
route.post('/crowdfundings', crowdfundingsPost);

module.exports = route;
