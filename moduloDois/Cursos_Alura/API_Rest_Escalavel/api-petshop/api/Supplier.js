const supplierTable = require('./database/supplierTable');
const DataNotFound = require('./errors/DataNotFound');
const InvalidFields = require('./errors/InvalidFileds');

class Supplier {
  constructor({ id, company, email, category, createdAt, updatedAt }) {
    this.id = id;
    this.company = company;
    this.email = email;
    this.category = category;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  async createSupplier () {
    this.validate();
    const result = await supplierTable.insert({
      company: this.company,
      email: this.email,
      category: this.category,
    });

    this.id = result.id;
    this.createdAt = result.createdAt;
    this.updatedAt = result.updatedAt;
  };

  async getSupplier() {
    const foundSupplier = await supplierTable.getSupplierById(this.id);
    this.company = foundSupplier.company;
    this.email = foundSupplier.email;
    this.category = foundSupplier.category;
    this.createdAt = foundSupplier.createdAt;
    this.updatedAt = foundSupplier.updatedAt;
  };

  async updateSupplier() {
    await supplierTable.getSupplierById(this.id);
    const data = ['company', 'email', 'category'];
    const updateData = {};
    data.forEach((item) => {
      const value = this[item];
      if (typeof value === 'string' && value.length > 0) {
        updateData[item] = value
      };
    });

    if (Object.keys(updateData).length === 0) {
      throw new DataNotFound();
    }

    await supplierTable.updateSup(this.id, updateData);
  };

  deleteSupplier() {
    return supplierTable.delete(this.id);
  };

  validate () {
    const fields = ['company', 'email', 'category'];

    fields.forEach(item => {
      const value = this[item];

      if (typeof value !== 'string' || value.length === 0) {
        throw new InvalidFields(item);
      };
    });
  };
}

module.exports = Supplier;