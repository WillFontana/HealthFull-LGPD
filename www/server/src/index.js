const Express = require('express');

const app = Express();

app.get('/', (request, response) =>{
  return response.json({
    dev: 'Willyan Fontana',
    message: 'Iniciando o desenvolvimento da aplicação'
  })
})

app.listen(4000,(request, response)=>{
  console.log('Api rodando na porta localhost:4000')
})