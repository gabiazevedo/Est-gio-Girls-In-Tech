const model = require('./models/supplierModel');

module.exports = {
  getSuppliers() {
    return model.findAll();
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
      throw new Error('Supplier not found');
    };
    return foundSupplier;
  },

  updateSup(id, data) {
    return model.update(data, {
      where: {
        id: id
      }
    })
  }
};