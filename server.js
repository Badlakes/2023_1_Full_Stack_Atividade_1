const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();

// Configurar o body-parser para analisar as requisições
app.use(bodyParser.json());

// Usar as rotas definidas no arquivo routes.js
app.use(routes);

// Iniciar o servidor
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
