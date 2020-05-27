const connection = require('../database/connections');
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
  async create(request, response) {
    const { usuario } = request.body;
    try {
      const passwordHash = await connection('users').where('name', usuario)
        .orWhere('email', usuario)
        .select('password').first();
      const match = await bcrypt.compare(request.body.password, passwordHash.password);

      if (!match) {
        return response.status(401).json({ message: 'A senha inserida está incorreta' });
      }
      const { id } = await connection('users').where('name', usuario)
        .orWhere('email', usuario)
        .select('id').first();

      const token = jwt.sign({ id: id }, 'Pão é bom', {
        expiresIn: '1d'
      });

      const user = await connection('users').where('id', id).select({ name: 'name', email: 'email' }).first();


      return response.json({ id, user, token });
    } catch (error) {
      console.log(error);
      return response.status(404).json({ message: error });
    }
  },

  async index(request, response) {
    try {
      const user = await connection('users').where('id', request.user)
      return response.json({ user });
    } catch (error) {
      console.log(error);
      return response.status(500).json({ message: 'Houve um erro ao recuperar o usuário' });
    }
  }
}