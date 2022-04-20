const express = require('express');
require('dotenv').config();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/teste', (_req, res) => {
  res.status(200).send({ message: 'API funcionando!' });
});

app.listen(PORT, () => {
  console.log(`API funcionando na porta ${3000}`);
});

module.exports = app;