const express = require('express');
const { register, login, logout, profile } = require('../controllers/user');
const auth = require('../middleware/auth');

const route = express.Router();

route.post('/register', register);
route.post('/login', login);
route.post('/logout', auth, logout);
route.get('/profile', auth, profile);

module.exports = route;
