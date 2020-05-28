const connection = require('../database/connections');
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;
module.exports = {
  async create(request, response) {
    try {
      const { name, email } = request.body;

      var id = crypto.randomBytes(12).toString('HEX')

      var profileId = crypto.randomBytes(12).toString('HEX')

      let matchId = await connection('users').where('id', id).select('*').first();

      let profileMatchId = await connection('profile').where('id', profileId).select('*').first();

      while (matchId || profileMatchId) {
        id = crypto.randomBytes(12).toString('HEX');

        profileId = crypto.randomBytes(12).toString('HEX')

        matchId = await connection('users').where('id', id).select('*').first();

        profileMatchId = await connection('profile').where('id', profileId).select('*').first();

      }

      const salt = await bcrypt.genSalt(10);

      const password = await bcrypt.hash(request.body.password, salt);

      const matchUser = await connection('users').where('email', email).select('*').first();

      if (matchUser) {
        return response.status(403).json({ message: 'Esse email já está cadastrado' });
      }

      await connection('users').insert({
        id,
        name,
        email,
        password
      });

      await connection('profile').insert({
        id: id,
        user_id: id,
      });

      const token = jwt.sign({ id }, 'Pão é bom', {
        expiresIn: '1y',
      });

      return response.json({ id, token });
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