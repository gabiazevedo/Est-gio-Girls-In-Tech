const model = require('./models/supplierModel');
const NotFound = require('../errors/NotFound');

module.exports = {
  getSuppliers() {
    return model.findAll({ raw: true });
  },

  async insert(supplier) {
    return model.create(supplier);
  },

  async getSupplierById(id) {
    const foundSupplier = await model.findOne({
      where: {
        id: id
      }
    });

    if (!foundSupplier) {
      throw new NotFound();
    };
    return foundSupplier;
  },

  updateSup(id, data) {
    return model.update(data, {
      where: {
        id: id
      },
    });
  },

  delete(id) {
    return model.destroy({
      where: {
        id: id
      }
    });
  }
};