const model = require('./models/supplierModel');

model
  .sync()
  .then(() => console.log('Table succesfully created!'))
  .catch(console.log);