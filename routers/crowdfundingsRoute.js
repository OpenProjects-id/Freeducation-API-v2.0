const express = require('express');
const route = express.Router();
const { crowdfundings, crowdfundingsPost } = require('../controllers/crowdfundingsController');

route.get('/crowdfundings', crowdfundings);
route.post('/crowdfundings', crowdfundingsPost);
// route.delete('/crowdfundings/:id');

module.exports = route;
