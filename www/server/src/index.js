const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(4000, (request, response) => {
  console.log('Api rodando na porta localhost:4000')
});

/**
 * Entidades:
 * Usuários
 * Aderência com a LGPD
 */

/**
 * Funcionalidades:
 * Registro
 * Login
 * Logout
 * Adicionar novo teste
 * Listar todos os testes
 */