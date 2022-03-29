const express = require('express');
const app = express();
const config = require('config');
const router = require('./routes/suppliersRoutes');
const NotFound = require('./errors/NotFound');
const InvalidFields = require('./errors/InvalidFileds');
const DataNotFound = require('./errors/DataNotFound');
const ValueNotSuported = require('./errors/ValueNotSuported');

const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use('/api/suppliers', router);

app.use((error, _req, res, _next) => {
  if (error instanceof NotFound) {
    res.status(404);
  };
  
  if (error instanceof InvalidFields || error instanceof DataNotFound) {
    res.status(400);
  };
  
  if (error instanceof ValueNotSuported) {
    res.status(406);
  };
  
  res.send(JSON.stringify({
    message: error.message,
    id: error.errorId
  }));
});

app.listen(config.get('api.port'), () => console.log(`Server listening on port ${config.get('api.port')}`));