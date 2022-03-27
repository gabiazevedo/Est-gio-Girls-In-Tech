const Sequelize = require('sequelize');
const instance = require('../index');

const columns = {
  company: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  category: {
    type: Sequelize.ENUM('animal_chow', 'toys'),
    allowNull: false
  }
}

const options = {
  freezeTableName: true,
  tableName: 'suppliers',
  timestamps: true
}

module.exports = instance.define('supplier', columns, options);