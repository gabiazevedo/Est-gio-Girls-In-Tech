const express = require('express');
const routes = require('./routes');

require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3000;

routes(app);

app.listen(PORT, () => {
  console.log(`API funcionando na porta ${3000}`);
});

module.exports = app;