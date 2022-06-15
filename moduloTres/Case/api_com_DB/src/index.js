const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;
app.use(express.json());

const merchantRouter = require('./api/routes/merchantRoutes');

app.use('/merchant', merchantRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});