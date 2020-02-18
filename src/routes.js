const express = require('express');

const UserController = require('../controllers/UserController');
const SessionController = require('../controllers/SessionController');
const SpaceController = require('../controllers/SpaceController');

const routes = new express.Router();

routes.post('/users', UserController.store);
routes.post('/login', SessionController.store);
routes.get('/spaces', SpaceController.index);


module.exports = routes;