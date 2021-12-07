const express = require('express');
const route = express.Router();
const { crowdfundings, crowdfundingsPost, crowdfundingsEdit } = require('../controllers/crowdfundings');
const auth = require('../middleware/auth');

route.get('/crowdfundings', auth, crowdfundings);
route.post('/crowdfundings', auth, crowdfundingsPost);
route.put('/crowdfundings/:id', auth, crowdfundingsEdit);

module.exports = route;
