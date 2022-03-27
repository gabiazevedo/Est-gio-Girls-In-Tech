const supplierTable = require('./database/supplierTable');

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
    const result = await supplierTable.insert({
      company: this.company,
      email: this.email,
      category: this.category
    });

    this.id = result.id;
    this.createdAt = result.createdAt;
    this.updatedAt = result.updatedAt
  }
}

module.exports = Supplier;