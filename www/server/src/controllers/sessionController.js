const connection = require('../database/connections');
const crypto = require('crypto');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;

module.exports = {
  async create(request, response) {
    const { usuario } = request.body;
    try {
      const passwordHash = await connection('users').where('name', usuario)
        .orWhere('email', usuario)
        .select('password').first();
      console.log(passwordHash);
      const match = await bcrypt.compare(request.body.password, passwordHash.password);

      if (!match) {
        return response.status(401).json({ message: 'A senha inserida está incorreta' });
      }
      const userId = await connection('users').where('name', usuario)
        .orWhere('email', usuario)
        .select('id').first();


      const token = jwt.sign({ userId }, 'secret-key', {
        expiresIn: '1m'
      });

      const user = await connection('users').where('id', userId).select('name').first();

      return response.json({ usuario: user, token });
    } catch (error) {
      console.log(error);
      return response.status(404).json({ message: error });
    }
  }
}