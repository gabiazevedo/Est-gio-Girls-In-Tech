const model = require('./models/supplierModel');

module.exports = {
  getSuppliers() {
    return model.findAll();
  },

  insert(supplier) {
    return model.create(supplier);
  }
};