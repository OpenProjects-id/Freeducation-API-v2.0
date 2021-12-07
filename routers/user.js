const express = require('express');
const { register, login, logout, profile } = require('../controllers/user');

const route = express.Router();

route.post('/register', register);
route.post('/login', login);
route.post('/logout', logout);
route.get('/profile', profile);

module.exports = route;
