const express = require('express');
const app = express();
const config = require('config');
const router = require('./routes/suppliersRoutes');

const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use('/api/suppliers', router);


app.listen(config.get('api.port'), () => console.log(`Server listening on port ${config.get('api.port')}`));