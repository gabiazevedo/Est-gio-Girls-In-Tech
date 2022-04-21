const express = require('express');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/teste', (_req, res) => {
  return res.status(200).send('API funcionando!!!');
});

app.listen(PORT, () => console.log(`API funcionando na porta ${3000}`));
