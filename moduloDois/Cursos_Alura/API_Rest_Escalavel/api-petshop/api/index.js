const express = require('express');
const app = express();
const config = require('config');

const bodyParser = require('body-parser');

app.use(bodyParser.json());


app.listen(config.get('api.porta'), () => console.log(`Server listening on port ${config.get('api.porta')}`));