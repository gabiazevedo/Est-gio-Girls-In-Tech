const express = require('express');
const merchantRouter = require('./routes/merchantRoutes');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/merchant', merchantRouter);

app.get('/teste', (_req, res) => {
  return res.status(200).send('API funcionando!!!');
});

app.listen(PORT, () => console.log(`API funcionando na porta ${3000}`));
