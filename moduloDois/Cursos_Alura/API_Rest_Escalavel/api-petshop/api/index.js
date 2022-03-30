const express = require('express');
const app = express();
const config = require('config');
const router = require('./routes/suppliersRoutes');
const NotFound = require('./errors/NotFound');
const InvalidFields = require('./errors/InvalidFileds');
const DataNotFound = require('./errors/DataNotFound');
const ValueNotSuported = require('./errors/ValueNotSuported');
const acceptFormat = require('./Serializer').acceptFormat;
const ErrorSerializer = require('./Serializer').ErrorSerializer;

const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use((req, res, next) => {
  let requestFormat = req.header('Accept');

  if (requestFormat === '*/*') {
    requestFormat = 'application/json';
  };

  if (acceptFormat.indexOf(requestFormat) === -1) {
    return res.status(406).end();
  };

  res.setHeader('Content-Type', requestFormat);
  next();
});

app.use('/api/suppliers', router);

app.use((error, _req, res, _next) => {
  let status = 500;

  if (error instanceof NotFound) {
    status = 404;
  };
  
  if (error instanceof InvalidFields || error instanceof DataNotFound) {
    status = 400;
  };
  
  if (error instanceof ValueNotSuported) {
    status = 406;
  };

  const errorSerializer = new ErrorSerializer(
    res.getHeader('Content-Type')
  )
  res.status(status).send(errorSerializer.serialize({
    id: error.errorId,
    message: error.message
  }));
});

app.listen(config.get('api.port'), () => console.log(`Server listening on port ${config.get('api.port')}`));