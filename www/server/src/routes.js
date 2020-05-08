const express = require('express');

const userController = require('./controllers/userController');

const sessionController = require('./controllers/sessionController');

const routes = express.Router();

/**
 * Rotas para a criação e listagem de usuários
 */

// Listagem de todos os usários
routes.get('/users', userController.index);

// Criação de um usuário novo
routes.post('/users', userController.create);

// Exclusão de um usuário
routes.delete('/users', userController.delete);


/**
 * Rotas para Login e logout de usuário
 */

// Login de usuário
routes.post('/login', sessionController.create);

module.exports = routes;