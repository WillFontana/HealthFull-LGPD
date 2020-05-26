const jwt = require('jsonwebtoken');

module.exports = function (require, response, next) {
  const token = require.header('token');

  if (!token) {
    return response.status(401).json({ message: "Erro de autenticação" });
  }

  try {
    const decode = jwt.verify(token, "secret-key");
    require.user = decode.id;
    console.log(require.user);
    next();
  } catch (error) {
    console.log(error);
    response.status(500).send({ message: "token invalido" });
  }
}