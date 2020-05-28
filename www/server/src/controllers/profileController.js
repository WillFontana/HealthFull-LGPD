const connection = require('../database/connections');

module.exports = {
  async update(request, response) {
    const id = request.header('id')

    const { age, job, city, uf, student, birthday } = request.body;

    try {
      await connection('profile').update({
        age: age,
        job: job,
        city: city,
        uf: uf,
        student: student,
        birthday: birthday,
      }).where('user_id', id);
      return response.status(201).json({ message: 'Dados do perfil atualizados com sucesso' });

    } catch (error) {
      console.log(error);
      return response.status(500).json({ message: 'Não foi possível atualizar os dados' });
    }

  },
  async index(request, response) {
    const { id } = request.query;
    try {
      const profile = await connection('profile').select('*').where({
        'user_id': id
      });
      return response.json({ profile });
    } catch (error) {
      console.log(error);
      return response.status(500).json({ message: 'Houve um erro ao carregar o perfil' });
    }
  },
}