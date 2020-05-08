const express = require('express');

const userController = require('./controllers/userController');

const sessionController = require('./controllers/sessionController');

const auth = require('./middleware/auth');

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
 * Rotas para Login, autenticação e logout de usuário
 */

// Login de usuário
routes.post('/login', sessionController.create);

// Autenticação do usuário
routes.get('/login', auth, sessionController.index);

module.exports = routes;