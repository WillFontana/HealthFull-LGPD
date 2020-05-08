const connection = require('../database/connections');
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;
module.exports = {
  async create(request, response) {
    try {
      const { name, email } = request.body;
      const id = crypto.randomBytes(4).toString('HEX')

      const salt = await bcrypt.genSalt(10);

      const password = await bcrypt.hash(request.body.password, salt);

      await connection('users').insert({
        id,
        name,
        email,
        password
      });

      const payload = {
        user: {
          id: id,
        }
      }

      const token = jwt.sign({ id: id }, 'secret-key', {
        expiresIn: 300,
      });

      return response.json({ id, token, payload });
    } catch (error) {
      console.log(error);
      return response.status(500).json({ message: 'Houve um erro ao cadastrar o usuário' });
    }
  },
  async index(request, response) {
    try {
      const users = await connection('users').select('*');
      return response.json({ users });
    } catch (error) {
      console.log(error);
      return response.status(500).json({ message: 'Houve um erro ao listar os usuarios' });
    }
  },
  async delete(request, response) {
    const { id } = request.query;
    try {
      const deletedUser = await connection('users').delete('*').where({
        id: id
      });
      return response.json({ deletedUser });
    } catch (error) {
      console.log(error);
      return response.status(500).json({ message: 'Houve um erro ao tentar deletar o usuário' });
    }
  }
}